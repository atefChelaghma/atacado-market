export type FooterLink = Readonly<{
  label: string;
  href?: string;
}>;

export type FooterLinkGroup = Readonly<{
  label: string;
  links: readonly FooterLink[];
}>;

export type FooterSocialIconName = 'instagram' | 'youtube' | 'rss';

export type FooterSocialLink = Readonly<{
  label: string;
  href?: string;
  icon: FooterSocialIconName;
}>;
