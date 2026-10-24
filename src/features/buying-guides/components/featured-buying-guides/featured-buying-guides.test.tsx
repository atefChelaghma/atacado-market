import { render, screen, within } from '@testing-library/react';
import { FEATURED_BUYING_GUIDES } from './featured-buying-guides.data';
import { FeaturedBuyingGuides } from './featured-buying-guides';

describe('FeaturedBuyingGuides', () => {
  it('renders the four guides in their configured order with image alternatives and valid destinations', () => {
    render(<FeaturedBuyingGuides />);

    expect(screen.getByText('Análises de longo prazo')).toBeVisible();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Guias de Compra em Destaque' }),
    ).toBeVisible();

    const section = screen.getByRole('region', { name: 'Guias de Compra em Destaque' });
    const cards = within(section).getAllByRole('article');

    expect(cards).toHaveLength(4);
    FEATURED_BUYING_GUIDES.forEach((guide, index) => {
      const card = cards[index];
      expect(within(card).getByRole('heading', { name: guide.title })).toBeVisible();
      expect(within(card).getByText(guide.category)).toBeVisible();
      expect(within(card).getByText(guide.imageBadge)).toBeVisible();
      expect(within(card).getByText(guide.updatedLabel)).toBeVisible();
      expect(within(card).getByRole('img', { name: guide.imageAlt })).toBeInTheDocument();
      expect(within(card).getByRole('link', { name: /ler guia/i })).toHaveAttribute(
        'href',
        guide.href,
      );
    });
  });
});
