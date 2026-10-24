import type { ProductVerdictCardData } from './product-verdict-card.types';

export const OSTER_PRIMA_LATTE_SAMPLE = {
  verdictLabel: 'Nossa Escolha Geral',
  verdictVariant: 'overallChoice',
  category: 'Cafeteira Expresso Semi-Automática',
  productName: 'Oster Prima Latte II',
  image: {
    src: 'https://images.pexels.com/photos/39529869/pexels-photo-39529869.jpeg',
    alt: 'Máquina de café expresso preparando uma bebida em uma bancada.',
  },
  description:
    'Melhor extração e vaporizador cremoso da categoria. Bomba italiana de 19 bar estável e reservatório dedicado para latte macchiato automático.',
  price: 'R$ 1.189',
  priceQualifier: 'à vista',
  priceContext: 'Melhor preço na Amazon Brasil • Atualizado hoje',
  retailerLabel: 'VER PREÇO NA AMAZON',
  retailerUrl: 'https://www.amazon.com.br/',
  reviewLabel: 'Ler avaliação completa',
  reviewUrl: '/#avaliacoes',
} satisfies ProductVerdictCardData;
