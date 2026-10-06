import React, { createContext, useEffect, useState } from 'react';
import uaTranslations from '../locales/ua.json';
import enTranslations from '../locales/en.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('ua');
  const [theme, setTheme] = useState(() => window.localStorage.getItem('devpulse-theme') || 'light');
  const apiUrl = import.meta.env.VITE_API_URL || window.location.origin;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('devpulse-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';
  }, [lang]);

  const translations = {
    ua: uaTranslations,
    en: enTranslations
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ua' ? 'en' : 'ua'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        theme,
        toggleTheme,
        t: translations[lang],
        apiUrl
      }}
    >
      {children}
    </AppContext.Provider>
  );
};