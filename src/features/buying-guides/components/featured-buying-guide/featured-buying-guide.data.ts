import type { FeaturedBuyingGuideData } from './featured-buying-guide.types';

export const FEATURED_ESPRESSO_GUIDE = {
  title: 'As Melhores Cafeteiras de Espresso para Ter em Casa (2024)',
  description:
    'Após 140 horas avaliando estabilidade térmica, pressão de bomba real (em barimetria de bancada) e espumação de leite, definimos os únicos modelos que extraem uma xícara comparável à de cafeterias especializadas sem complicar sua rotina matinal.',
  image: {
    src: 'https://images.pexels.com/photos/39529869/pexels-photo-39529869.jpeg',
    alt: 'Máquina de espresso preparando café em uma xícara sobre a bancada.',
  },
  metadata: {
    author: 'Rafael Mendes',
    updatedLabel: 'Atualizado há 2 dias',
    testedModelsLabel: '18 modelos testados',
  },
  badges: [
    { label: 'GUIA DEFINITIVO', kind: 'guide' },
    { label: 'Laboratório CRITÉRIO', kind: 'laboratory' },
  ],
  tags: ['Extração manual e cápsulas', 'R$ 499 a R$ 4.200', 'Testes cegos de paladar'],
  href: '/#guias-de-compra',
  readingTime: '14 min de leitura',
} satisfies FeaturedBuyingGuideData;
