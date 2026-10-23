export type HomeHeroCategoryIconName =
  'coffee' | 'technology' | 'pets' | 'wellness' | 'home' | 'baby';

export type HomeHeroCategory = Readonly<{
  label: string;
  icon: HomeHeroCategoryIconName;
  href: string;
}>;

export type HomeHeroContent = Readonly<{
  badge: string;
  headline: string;
  introduction: string;
  categories: readonly HomeHeroCategory[];
}>;
