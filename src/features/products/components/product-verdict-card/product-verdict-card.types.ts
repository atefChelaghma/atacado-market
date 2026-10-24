export type ProductVerdictVariant = 'overallChoice' | 'bestValue' | 'premiumChoice';

export type ProductVerdictImage = Readonly<{
  src: string;
  alt: string;
}>;

export type ProductVerdictCardData = Readonly<{
  verdictLabel: string;
  verdictVariant: ProductVerdictVariant;
  category: string;
  productName: string;
  image: ProductVerdictImage;
  description: string;
  price: string;
  priceQualifier?: string;
  priceContext?: string;
  retailerLabel: string;
  retailerUrl: string;
  reviewLabel: string;
  reviewUrl: string;
}>;

export type ProductVerdictCardProps = Readonly<{
  product: ProductVerdictCardData;
}>;
