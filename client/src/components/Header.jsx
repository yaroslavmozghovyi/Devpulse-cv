import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export const Header = () => {
  const { t, lang, toggleLanguage, theme, toggleTheme } = useContext(AppContext);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label={t.header.nav.home}>
          <span className="brand-mark">YM</span>
          <span className="brand-name">Yaroslav Mozghovyi<span className="brand-period">.</span></span>
        </NavLink>
        <nav className="main-nav" aria-label={t.header.navigationLabel}>
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{t.header.nav.home}</NavLink>
          <NavLink to="/research" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{t.header.nav.research}</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{t.header.nav.skills}</NavLink>
          <NavLink to="/experience" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{t.header.nav.experience}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{t.header.nav.contact}</NavLink>
        </nav>
        <button className="language-button" onClick={toggleLanguage} aria-label={t.header.languageLabel}>
          {lang === 'ua' ? 'EN' : 'UA'}
        </button>
        <button className="theme-button" onClick={toggleTheme} aria-label={t.header.themeLabel} title={t.header.themeLabel}>
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
          <span>{theme === 'light' ? t.header.darkTheme : t.header.lightTheme}</span>
        </button>
      </div>
    </header>
  );
};
