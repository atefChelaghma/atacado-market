export type FeaturedBuyingGuideCardData = Readonly<{
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  category: string;
  title: string;
  description: string;
  updatedLabel: string;
  linkLabel: string;
  href: string;
}>;

export type FeaturedBuyingGuideCardProps = Readonly<{
  guide: FeaturedBuyingGuideCardData;
}>;
