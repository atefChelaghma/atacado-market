import type { SiteNavigationItem } from './site-header.types';

export const SITE_NAVIGATION: readonly SiteNavigationItem[] = [
  { label: 'Categorias', href: '/#categorias', hasSubmenuIndicator: true },
  { label: 'Guias de Compra', href: '/#guias-de-compra' },
  { label: 'Comparativos', href: '/#comparativos' },
  { label: 'Avaliações', href: '/#avaliacoes' },
  { label: 'Como Avaliamos', href: '/#como-avaliamos' },
];
