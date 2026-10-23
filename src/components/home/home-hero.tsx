import Link from 'next/link';
import { HOME_HERO_CONTENT } from './home-hero.data';
import styles from './home-hero.module.scss';
import { CategoryIcon } from './category-icon';

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.badge}>
        <span aria-hidden="true" />
        {HOME_HERO_CONTENT.badge}
      </p>
      <h1 id="hero-title">{HOME_HERO_CONTENT.headline}</h1>
      <p className={styles.intro}>{HOME_HERO_CONTENT.introduction}</p>
      <nav className={styles.categoryNavigation} id="categorias" aria-label="Navegue por categoria">
        <span className={styles.navigationLabel}>Navegue por:</span>
        <ul>
          {HOME_HERO_CONTENT.categories.map(({ label, icon, href }) => (
            <li key={label}>
              <Link href={href} aria-label={`${label} — ver guias de compra`}>
                <CategoryIcon name={icon} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
