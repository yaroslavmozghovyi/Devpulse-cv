import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export const Home = () => {
  const { t } = useContext(AppContext);

  return (
    <div className="page-stack">
      <section className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" />{t.hero.status}</p>
          <h1>{t.hero.name}</h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-bio">{t.hero.bio}</p>
          <div className="hero-facts">
            <span>{t.hero.degree}</span>
            <span>{t.hero.location}</span>
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">{t.hero.contactCta}</Link>
            <Link className="button button-secondary" to="/experience">{t.hero.experienceCta} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="portrait-frame">
          <img className="portrait-image" src={`${import.meta.env.BASE_URL}Portrait.jpg`} alt={t.hero.portraitAlt} />
          <div className="portrait-caption"><span className="availability-dot" />{t.hero.portraitCaption}</div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="eyebrow">{t.home.focusEyebrow}</p><h2>{t.home.focusTitle}</h2></div>
          <Link className="text-link" to="/skills">{t.home.skillsLink} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="focus-grid">
          {t.home.focusItems.map((item, index) => (
            <article className="focus-card" key={item.title}>
              <span className="focus-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div><p className="eyebrow">{t.home.researchEyebrow}</p><h2>{t.home.researchTitle}</h2><p>{t.home.researchDescription}</p></div>
        <Link className="button button-secondary" to="/research">{t.home.researchLink} <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  );
};
