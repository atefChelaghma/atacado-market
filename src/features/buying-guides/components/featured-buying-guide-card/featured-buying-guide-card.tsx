import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import styles from './featured-buying-guide-card.module.scss';
import type { FeaturedBuyingGuideCardProps } from './featured-buying-guide-card.types';

export function FeaturedBuyingGuideCard({ guide }: FeaturedBuyingGuideCardProps) {
  const titleId = useId();

  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <div className={styles.imageFrame}>
        <Image
          className={styles.image}
          src={guide.imageSrc}
          alt={guide.imageAlt}
          fill
          sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 84px) / 2), 281px"
        />
        <span className={styles.imageBadge}>{guide.imageBadge}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{guide.category}</p>
        <h3 className={styles.title} id={titleId}>
          {guide.title}
        </h3>
        <p className={styles.description}>{guide.description}</p>
        <footer className={styles.footer}>
          <span className={styles.updated}>{guide.updatedLabel}</span>
          <Link className={styles.link} href={guide.href}>
            {guide.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}
