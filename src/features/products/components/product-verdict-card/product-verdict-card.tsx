import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import styles from './product-verdict-card.module.scss';
import type { ProductVerdictCardProps, ProductVerdictVariant } from './product-verdict-card.types';

const verdictStyles: Record<ProductVerdictVariant, string> = {
  overallChoice: styles.overallChoice,
  bestValue: styles.bestValue,
  premiumChoice: styles.premiumChoice,
};

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M9 2.5h4.5V7M13.2 2.8 7.5 8.5" />
      <path d="M12 9v3.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H7" />
    </svg>
  );
}

export function ProductVerdictCard({ product }: ProductVerdictCardProps) {
  const titleId = useId();

  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <span className={`${styles.verdict} ${verdictStyles[product.verdictVariant]}`}>
        {product.verdictLabel}
      </span>

      <div className={styles.imageFrame}>
        <Image
          className={styles.image}
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.productName} id={titleId}>
          {product.productName}
        </h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.pricing}>
          <p className={styles.priceLine}>
            <span className={styles.price}>{product.price}</span>
            {product.priceQualifier && (
              <span className={styles.priceQualifier}>{product.priceQualifier}</span>
            )}
          </p>
          {product.priceContext && <p className={styles.priceContext}>{product.priceContext}</p>}
        </div>

        <div className={styles.actions}>
          <a
            className={styles.retailerCta}
            href={product.retailerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {product.retailerLabel}
            <ExternalLinkIcon />
          </a>
          <Link className={styles.reviewLink} href={product.reviewUrl}>
            {product.reviewLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
