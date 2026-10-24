import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';
import styles from './featured-buying-guide.module.scss';
import type { FeaturedBuyingGuideProps, FeaturedGuideBadge } from './featured-buying-guide.types';

function LaboratoryIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5.5 2.5h5M6.5 2.5v4.2L3.3 12a1 1 0 0 0 .9 1.5h7.6a1 1 0 0 0 .9-1.5L9.5 6.7V2.5M5.3 10h5.4" />
    </svg>
  );
}

function EditorialBadge({ badge }: { badge: FeaturedGuideBadge }) {
  return (
    <span className={`${styles.badge} ${styles[badge.kind]}`}>
      {badge.kind === 'laboratory' && <LaboratoryIcon />}
      {badge.label}
    </span>
  );
}

export function FeaturedBuyingGuide({ guide }: FeaturedBuyingGuideProps) {
  const titleId = useId();

  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <div className={styles.imagePanel}>
        <Image
          className={styles.image}
          src={guide.image.src}
          alt={guide.image.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 52vw, 58vw"
          preload
        />
        <div className={styles.badges}>
          {guide.badges.map((badge) => (
            <EditorialBadge key={badge.kind} badge={badge} />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.metadata}>
          <span>Por {guide.metadata.author}</span>
          <span>{guide.metadata.updatedLabel}</span>
          <span>{guide.metadata.testedModelsLabel}</span>
        </p>
        <h2 className={styles.title} id={titleId}>
          {guide.title}
        </h2>
        <p className={styles.description}>{guide.description}</p>
        <ul className={styles.tags} aria-label="Destaques do guia">
          {guide.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link href={guide.href} className={styles.cta}>
            Ler guia completo <span aria-hidden="true">→</span>
          </Link>
          <span className={styles.readingTime}>{guide.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
