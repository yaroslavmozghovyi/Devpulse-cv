import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const ContactPage = () => {
  const { t } = useContext(AppContext);
  const { contact } = t;
  const contacts = [
    { label: contact.email, value: 'yaroslavmozghovyi@gmail.com', href: 'mailto:yaroslavmozghovyi@gmail.com', icon: '↗' },
    { label: contact.telegram, value: '@yarik_jan', href: 'https://t.me/yarik_jan', icon: '↗' },
    { label: contact.linkedin, value: 'linkedin.com/in/мозговий-ярослав-08003a290', href: 'https://www.linkedin.com/in/%D0%BC%D0%BE%D0%B7%D0%B3%D0%BE%D0%B2%D0%B8%D0%B9-%D1%8F%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2-08003a290/?isSelfProfile=true', icon: '↗' },
    { label: contact.github, value: 'github.com/yaroslavmozghovyi', href: 'https://github.com/yaroslavmozghovyi', icon: '↗' },
    { label: contact.tiktok, value: '@_senpa1_', href: 'https://www.tiktok.com/@_senpa1_', icon: '↗' }
  ];

  return (
    <div className="page-stack">
      <section className="page-intro">
        <p className="eyebrow">{t.header.nav.contact}</p>
        <h1>{contact.title}</h1>
        <p>{contact.subtitle}</p>
      </section>
      <section className="contact-layout">
        <div className="contact-list">
          {contacts.map((item) => (
            <article className="contact-card" key={item.label}>
              <div><span className="contact-label">{item.label}</span>{item.href ? <a className="contact-value" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>{item.value}</a> : <span className="contact-value">{item.value}</span>}</div>
              <span className="contact-icon" aria-hidden="true">{item.icon}</span>
            </article>
          ))}
        </div>
        <aside className="availability-card">
          <span className="availability-dot" />
          <p className="eyebrow">{contact.availabilityTitle}</p>
          <h2>{t.hero.status}</h2>
          <p>{contact.availabilityText}</p>
          <span className="contact-label">{contact.location}</span><p className="contact-value">{contact.locationValue}</p>
        </aside>
      </section>
    </div>
  );
};
