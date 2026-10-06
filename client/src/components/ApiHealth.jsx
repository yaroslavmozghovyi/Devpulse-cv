import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

export const ApiHealth = () => {
  const { t, apiUrl } = useContext(AppContext);
  const [health, setHealth] = useState({ state: 'checking', uptime: '' });
  const labels = t.experience;

  useEffect(() => {
    const controller = new AbortController();

    const checkHealth = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/v1/healthcheck`, { signal: controller.signal });
        if (!response.ok) throw new Error('Health check failed');

        const result = await response.json();
        if (result.status !== 'OK') throw new Error('API is unavailable');
        setHealth({ state: 'online', uptime: result.serverUptime });
      } catch {
        if (!controller.signal.aborted) setHealth({ state: 'offline', uptime: '' });
      }
    };

    checkHealth();
    const interval = window.setInterval(checkHealth, 30000);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, [apiUrl]);

  const statusText = health.state === 'checking'
    ? labels.apiStatusChecking
    : health.state === 'online'
      ? labels.apiStatusOnline
      : labels.apiStatusOffline;

  return (
    <div className={`api-health api-health-${health.state}`} aria-live="polite">
      <span className="api-health-dot" aria-hidden="true" />
      <span>{labels.apiStatusTitle}: <strong>{statusText}</strong></span>
      {health.state === 'online' && <span className="api-uptime">{labels.apiUptime}: {health.uptime}</span>}
    </div>
  );
};
