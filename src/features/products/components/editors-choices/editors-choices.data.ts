import { OSTER_PRIMA_LATTE_SAMPLE } from '../product-verdict-card/product-verdict-card.data';
import type { ProductVerdictCardData } from '../product-verdict-card/product-verdict-card.types';

export const EDITORS_CHOICES: readonly ProductVerdictCardData[] = [
  OSTER_PRIMA_LATTE_SAMPLE,
  {
    verdictLabel: 'Melhor Custo-Benefício',
    verdictVariant: 'bestValue',
    category: 'Fones TWS Bluetooth',
    productName: 'Fone QCY T13 ANC',
    image: {
      src: 'https://images.pexels.com/photos/8858287/pexels-photo-8858287.jpeg',
      alt: 'Fones de ouvido sem fio pretos em um estojo aberto sobre uma superfície de madeira.',
    },
    description:
      'Cancelamento de ruído surpreendente pelo preço. Resposta de graves equilibrada, isolamento ativo de 28dB e autonomia para até 7 horas contínuas.',
    price: 'R$ 168',
    priceQualifier: 'com frete',
    priceContext: 'Disponível no Mercado Livre • Atualizado hoje',
    retailerLabel: 'VER NO MERCADO LIVRE',
    retailerUrl: 'https://www.mercadolivre.com.br/',
    reviewLabel: 'Ler avaliação completa',
    reviewUrl: '/#avaliacoes',
  },
  {
    verdictLabel: 'Escolha Premium',
    verdictVariant: 'premiumChoice',
    category: 'Robô Aspirador com Doca Completa',
    productName: 'Roborock S8 Pro Ultra',
    image: {
      src: 'https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg',
      alt: 'Robô aspirador circular limpando um piso de madeira.',
    },
    description:
      'Autonomia total e lavagem automática do mop com secagem a ar quente. Mapeamento LiDAR tridimensional sem enroscar em cabos ou brinquedos.',
    price: 'R$ 7.990',
    priceQualifier: 'em até 10x',
    priceContext: 'Melhor preço na Amazon Brasil • Garantia oficial',
    retailerLabel: 'VER PREÇO NA AMAZON',
    retailerUrl: 'https://www.amazon.com.br/',
    reviewLabel: 'Ler avaliação completa',
    reviewUrl: '/#avaliacoes',
  },
];
