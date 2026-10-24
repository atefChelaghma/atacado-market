import type { HomeHeroContent } from './home-hero.types';

export const HOME_HERO_CONTENT = {
  badge: 'JORNALISMO INVESTIGATIVO & CONSUMO RACIONAL',
  headline: 'Compre melhor. Escolha com critério e confiança.',
  introduction:
    'Testamos, comparamos e selecionamos os melhores produtos disponíveis no Brasil para que você invista seu dinheiro sem arrependimentos ou falsas promessas de marketing.',
  categories: [
    { label: 'Café & Cozinha', icon: 'coffee', href: '/#guias-de-compra' },
    { label: 'Tecnologia', icon: 'technology', href: '/#guias-de-compra' },
    { label: 'Pets', icon: 'pets', href: '/#guias-de-compra' },
    { label: 'Bem-estar', icon: 'wellness', href: '/#guias-de-compra' },
    { label: 'Casa Inteligente', icon: 'home', href: '/#guias-de-compra' },
    { label: 'Bebês', icon: 'baby', href: '/#guias-de-compra' },
  ],
} satisfies HomeHeroContent;
