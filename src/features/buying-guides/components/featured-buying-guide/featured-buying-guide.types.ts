export type FeaturedGuideBadge = Readonly<{
  label: string;
  kind: 'guide' | 'laboratory';
}>;

export type FeaturedGuideImage = Readonly<{
  src: string;
  alt: string;
}>;

export type FeaturedGuideMetadata = Readonly<{
  author: string;
  updatedLabel: string;
  testedModelsLabel: string;
}>;

export type FeaturedBuyingGuideData = Readonly<{
  title: string;
  description: string;
  image: FeaturedGuideImage;
  metadata: FeaturedGuideMetadata;
  badges: readonly FeaturedGuideBadge[];
  tags: readonly string[];
  href: string;
  readingTime: string;
}>;

export type FeaturedBuyingGuideProps = Readonly<{
  guide: FeaturedBuyingGuideData;
}>;
