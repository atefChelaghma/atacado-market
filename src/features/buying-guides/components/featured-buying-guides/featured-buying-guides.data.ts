import { ROBOT_VACUUM_GUIDE_CARD } from '../featured-buying-guide-card/featured-buying-guide-card.data';
import type { FeaturedBuyingGuideCardData } from '../featured-buying-guide-card/featured-buying-guide-card.types';

export const FEATURED_BUYING_GUIDES: readonly FeaturedBuyingGuideCardData[] = [
  ROBOT_VACUUM_GUIDE_CARD,
  {
    imageSrc: 'https://images.pexels.com/photos/8880745/pexels-photo-8880745.jpeg',
    imageAlt: 'Porção de batatas fritas recém-preparadas em uma cesta metálica.',
    imageBadge: '14 Fritadeiras Avaliadas',
    category: 'Cozinha & Eletrodomésticos',
    title: 'Air Fryers Testadas: Quais Realmente Valem a Compra em 2024?',
    description:
      'Medimos distribuição térmica com câmera infravermelha, durabilidade do antiaderente e ruído de ventoinha.',
    updatedLabel: 'Atualizado há 1 semana',
    linkLabel: 'Ler Guia',
    href: '/#guias-de-compra',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    imageAlt: 'Monitor e computador em uma mesa de trabalho.',
    imageBadge: '8 Telas IPS & OLED',
    category: 'Ergonomia & Produtividade',
    title: 'Monitores 4K para Produtividade e Home Office: O Comparativo Real',
    description:
      'Densidade de pixels para textos finos, portas USB-C com carregamento Power Delivery e ajuste ergonômico.',
    updatedLabel: 'Atualizado há 3 dias',
    linkLabel: 'Ler Guia',
    href: '/#guias-de-compra',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/8434633/pexels-photo-8434633.jpeg',
    imageAlt: 'Tigela com ração seca para cães.',
    imageBadge: 'Auditoria de Rótulos',
    category: 'Nutrição Veterinária',
    title: 'Rações Super Premium para Cães: O Que Analisar no Rótulo',
    description:
      'Proteína real versus subprodutos, digestibilidade declarada e aditivos controversos no mercado nacional.',
    updatedLabel: 'Atualizado há 4 dias',
    linkLabel: 'Ler Guia',
    href: '/#guias-de-compra',
  },
];
