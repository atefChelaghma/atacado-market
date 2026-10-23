import Link from 'next/link';
import styles from './site-footer.module.scss';
import {
  FOOTER_COMPANY_INFO,
  FOOTER_DESCRIPTION,
  FOOTER_LEGAL_NOTICE,
  FOOTER_LINK_GROUPS,
  FOOTER_SOCIAL_LINKS,
} from './site-footer.data';
import type { FooterLink, FooterSocialIconName } from './site-footer.types';

function SocialIcon({ name }: { name: FooterSocialIconName }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <rect x="3.25" y="3.25" width="13.5" height="13.5" rx="4" />
        <circle cx="10" cy="10" r="3.15" />
        <circle className={styles.iconDot} cx="14.2" cy="5.9" r="0.8" />
      </svg>
    );
  }

  if (name === 'youtube') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <rect x="2.5" y="4.5" width="15" height="11" rx="3" />
        <path className={styles.iconFill} d="m8.3 7.2 4.5 2.8-4.5 2.8z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle className={styles.iconFill} cx="4.2" cy="15.8" r="1.6" />
      <path d="M3.6 9.5a6.9 6.9 0 0 1 6.9 6.9M3.6 5.2a11.2 11.2 0 0 1 11.2 11.2" />
    </svg>
  );
}

function FooterLinks({ label, links }: { label: string; links: readonly FooterLink[] }) {
  return (
    <nav className={styles.linkGroup} aria-label={label}>
      <h2>{label}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <Link href={link.href}>{link.label}</Link>
            ) : (
              <span aria-disabled="true" title="Conteúdo ainda não disponível">
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.mainRegion}>
          <div className={styles.brandColumn}>
            <Link className={styles.wordmark} href="/" aria-label="CRITÉRIO — início">
              CRITÉRIO
            </Link>
            <p>{FOOTER_DESCRIPTION}</p>
            <ul className={styles.socialLinks} aria-label="Redes sociais e feed">
              {FOOTER_SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  {href ? (
                    <a href={href} aria-label={label} target="_blank" rel="noreferrer">
                      <SocialIcon name={icon} />
                    </a>
                  ) : (
                    <span role="img" aria-label={`${label} — link não configurado`}>
                      <SocialIcon name={icon} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_LINK_GROUPS.map(({ label, links }) => (
            <FooterLinks key={label} label={label} links={links} />
          ))}
        </div>

        <div className={styles.legalRegion}>
          <p>{FOOTER_LEGAL_NOTICE}</p>
          <p className={styles.companyInfo}>
            {FOOTER_COMPANY_INFO.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
