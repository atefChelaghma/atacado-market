import type { FooterLinkGroup, FooterSocialLink } from './site-footer.types';

export const FOOTER_DESCRIPTION =
  'Publicação editorial brasileira dedicada a testes rigorosos, avaliações independentes e vereditos transparentes sobre bens de consumo. Ajudamos você a fazer escolhas conscientes e duráveis.';

// Entries without an href stay informational until their destination pages are implemented.
export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    label: 'Categorias',
    links: [
      { label: 'Café e Cozinha' },
      { label: 'Eletrônicos e Áudio' },
      { label: 'Casa Inteligente' },
      { label: 'Pets e Cuidados' },
      { label: 'Escritório e Ergonomia' },
    ],
  },
  {
    label: 'Transparência',
    links: [
      { label: 'Metodologia de Testes', href: '/#como-avaliamos' },
      { label: 'Código Editorial' },
      { label: 'Transparência e Afiliados' },
      { label: 'Fale com a Redação' },
    ],
  },
  {
    label: 'Termos',
    links: [
      { label: 'Política de Privacidade' },
      { label: 'Termos de Uso' },
      { label: 'Política de Correções' },
      { label: 'Sala de Imprensa' },
    ],
  },
];

// Only configured HTTPS destinations are rendered as external links.
function configuredHttpsUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export const FOOTER_SOCIAL_LINKS: readonly FooterSocialLink[] = [
  {
    label: 'Instagram',
    href: configuredHttpsUrl(process.env.CRITERIO_INSTAGRAM_URL),
    icon: 'instagram',
  },
  {
    label: 'YouTube',
    href: configuredHttpsUrl(process.env.CRITERIO_YOUTUBE_URL),
    icon: 'youtube',
  },
  {
    label: 'RSS',
    href: configuredHttpsUrl(process.env.CRITERIO_RSS_URL),
    icon: 'rss',
  },
];

export const FOOTER_LEGAL_NOTICE =
  '© 2024 CRITÉRIO Editorial Ltda. Todos os direitos reservados. Avaliações independentes para o consumidor brasileiro. Transparência editorial: Ao comprar pelos links indicados, podemos receber comissões sem qualquer custo adicional para você.';

export const FOOTER_COMPANY_INFO = ['São Paulo, Brasil'] as const;
