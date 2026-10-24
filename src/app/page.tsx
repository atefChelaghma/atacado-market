import { HomeHero } from '@/components/home/home-hero';
import { FEATURED_ESPRESSO_GUIDE } from '@/features/buying-guides/components/featured-buying-guide/featured-buying-guide.data';
import { FeaturedBuyingGuide } from '@/features/buying-guides/components/featured-buying-guide/featured-buying-guide';
import { EditorsChoices } from '@/features/products/components/editors-choices/editors-choices';
import { FeaturedBuyingGuides } from '@/features/buying-guides/components/featured-buying-guides/featured-buying-guides';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <FeaturedBuyingGuide guide={FEATURED_ESPRESSO_GUIDE} />
      <EditorsChoices />

      <FeaturedBuyingGuides />
    </main>
  );
}
