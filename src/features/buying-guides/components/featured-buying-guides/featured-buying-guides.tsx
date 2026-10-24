import { FeaturedBuyingGuideCard } from '../featured-buying-guide-card/featured-buying-guide-card';
import { FEATURED_BUYING_GUIDES } from './featured-buying-guides.data';
import styles from './featured-buying-guides.module.scss';

export function FeaturedBuyingGuides() {
  return (
    <section className={styles.section} aria-labelledby="featured-guides-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Análises de longo prazo</p>
          <h2 className={styles.title} id="featured-guides-title">
            Guias de Compra em Destaque
          </h2>
        </header>

        <ul className={styles.grid}>
          {FEATURED_BUYING_GUIDES.map((guide) => (
            <li className={styles.gridItem} key={guide.title}>
              <FeaturedBuyingGuideCard guide={guide} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
