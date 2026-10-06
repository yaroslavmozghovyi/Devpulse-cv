import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const SkillsPage = () => {
  const { t } = useContext(AppContext);
  const { skills } = t;

  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">{t.header.nav.skills}</p>
        <h1>{skills.title}</h1>
        <p>{skills.subtitle}</p>
      </section>
      <section className="leadership-card">
        <span className="leadership-icon" aria-hidden="true">✳</span>
        <div><p className="eyebrow">{skills.leadershipTitle}</p><h2>{skills.leadershipRole}</h2><p>{skills.leadershipDescription}</p></div>
      </section>
      <section className="skills-grid">
        {skills.categories.map((category) => (
          <article className="skill-card" key={category.name}>
            <h2>{category.name}</h2>
            <div className="skill-tags">{category.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </section>
      <section className="skills-grid secondary-grid">
        <article className="skill-card"><h2>{skills.certificatesTitle}</h2><ul className="detail-list">{skills.certificates.map((item) => <li key={item}>{item}</li>)}</ul><a className="text-link certificate-link" href="https://drive.google.com/drive/folders/163EpYG025pyftujZHBOBHqJ0qHewL3W1?hl=ru" target="_blank" rel="noreferrer">{skills.certificatesLink} <span aria-hidden="true">↗</span></a></article>
        <article className="skill-card"><h2>{skills.readingTitle}</h2><ul className="detail-list">{skills.reading.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="skill-card"><h2>{skills.qualitiesTitle}</h2><div className="skill-tags">{skills.qualities.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></article>
      </section>
    </div>
  );
};
