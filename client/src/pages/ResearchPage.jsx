import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const ResearchPage = () => {
  const { t } = useContext(AppContext);
  const { publications } = t;

  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">{t.home.researchEyebrow}</p>
        <h1>{publications.title}</h1>
        <p>{publications.subtitle}</p>
      </section>
      <section className="publication-list" aria-label={publications.title}>
        {publications.items.map((publication) => (
          <article className="publication-card" key={`${publication.year}-${publication.title}`}>
            <span className="publication-year">{publication.year}</span>
            <div className="publication-content">
              <h2>{publication.title}</h2>
              <p className="publication-meta"><strong>{publications.authors}:</strong> {publication.authors}</p>
              <p className="publication-meta"><strong>{publications.venue}:</strong> {publication.conference}</p>
              <p className="publication-description">{publication.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="subsection">
        <div className="section-heading"><div><p className="eyebrow">{publications.referencesNote}</p><h2>{publications.referencesTitle}</h2></div></div>
        <div className="reference-grid">
          {publications.references.map((reference) => (
            <article className="reference-card" key={reference.name}>
              <h3>{reference.name}</h3>
              <p>{reference.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
