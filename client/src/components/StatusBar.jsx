import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const StatusBar = () => {
  const { t } = useContext(AppContext);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>{t.footer.note}</span>
        <span>© 2026 Yaroslav Mozghovyi</span>
      </div>
    </footer>
  );
};
