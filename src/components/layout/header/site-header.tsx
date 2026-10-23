import Link from 'next/link';
import styles from './site-header.module.scss';
import { SITE_NAVIGATION } from './site-header.data';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.wordmark} href="/" aria-label="CRITÉRIO — início">
          CRITÉRIO
        </Link>
        <nav className={styles.navigation} aria-label="Navegação principal">
          {SITE_NAVIGATION.map(({ label, href, hasSubmenuIndicator }) => (
            <Link className={styles.navLink} href={href} key={href}>
              {label}
              {hasSubmenuIndicator && <span className={styles.chevron} aria-hidden="true" />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
