import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ApiHealth } from '../components/ApiHealth';

export const ExperiencePage = () => {
  const { t } = useContext(AppContext);
  const { experience } = t;

  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">{t.header.nav.experience}</p>
        <h1>{experience.title}</h1>
        <p>{experience.subtitle}</p>
      </section>

      <section className="subsection">
        <div className="section-heading"><div><h2>{experience.workTitle}</h2></div></div>
        <article className="experience-card">
          <div className="experience-marker" aria-hidden="true"><span /></div>
          <div className="experience-content">
            <p className="experience-date">{experience.jobDates}</p>
            <h3>{experience.jobTitle}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-description">{experience.jobDescription}</p>
          </div>
        </article>
      </section>

      <section className="subsection">
        <div className="section-heading"><div><h2>{experience.educationTitle}</h2></div></div>
        <article className="experience-card education-card">
          <div className="experience-marker" aria-hidden="true"><span /></div>
          <div className="experience-content">
            <p className="experience-date">{experience.educationDates}</p>
            <h3>{experience.degreeTitle}</h3>
            <p className="experience-company">{experience.university}</p>
            <h4>{experience.courseworkLabel}</h4>
            <div className="skill-tags">{experience.coursework.map((course) => <span className="skill-tag" key={course}>{course}</span>)}</div>
          </div>
        </article>
      </section>

      <section className="project-feature">
        <div className="project-feature-top"><span className="project-icon" aria-hidden="true">&lt;/&gt;</span><p className="eyebrow">{experience.projectStackLabel}</p></div>
        <h2>{experience.projectTitle}</h2>
        <p className="project-description">{experience.projectDescription}</p>
        <ApiHealth />
        <div className="project-columns">
          <div><h3>{experience.projectStackLabel}</h3><div className="skill-tags">{experience.projectStack.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></div>
          <div><h3>{experience.projectFeaturesLabel}</h3><ul className="project-feature-list">{experience.projectFeatures.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="skills-grid">
        <article className="skill-card"><h2>{experience.achievementsTitle}</h2><ul className="detail-list">{experience.achievements.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="skill-card"><h2>{experience.languagesTitle}</h2><div className="language-list">{experience.languages.map((item) => <div className="language-row" key={item.name}><span>{item.name}</span><strong>{item.level}</strong></div>)}</div></article>
      </section>

      <section className="skill-card activities-card"><h2>{experience.activitiesTitle}</h2><ul className="detail-list">{experience.activities.map((item) => <li key={item}>{item}</li>)}</ul></section>
    </div>
  );
};
