import Link from 'next/link';
import { ProductVerdictCard } from '../product-verdict-card/product-verdict-card';
import { EDITORS_CHOICES } from './editors-choices.data';
import styles from './editors-choices.module.scss';

export function EditorsChoices() {
  return (
    <section
      className={styles.section}
      id="escolhas-dos-editores"
      aria-labelledby="editors-choices-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Vereditos Rápidos</p>
            <h2 id="editors-choices-title">Escolhas dos Editores</h2>
          </div>
          <Link className={styles.allLink} href="/#vereditos">
            Ver todos os vereditos <span aria-hidden="true">↗</span>
          </Link>
        </header>
        <div className={styles.divider} aria-hidden="true" />
        <ul className={styles.productGrid} id="vereditos" aria-label="Vereditos de produtos">
          {EDITORS_CHOICES.map((product) => (
            <li key={product.productName}>
              <ProductVerdictCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
