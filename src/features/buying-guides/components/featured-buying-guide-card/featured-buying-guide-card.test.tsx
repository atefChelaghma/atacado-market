import { render, screen } from '@testing-library/react';
import { ROBOT_VACUUM_GUIDE_CARD } from './featured-buying-guide-card.data';
import { FeaturedBuyingGuideCard } from './featured-buying-guide-card';

describe('FeaturedBuyingGuideCard', () => {
  it('renders image, category, title, description, update label, and guide link', () => {
    render(<FeaturedBuyingGuideCard guide={ROBOT_VACUUM_GUIDE_CARD} />);

    expect(screen.getByRole('img', { name: ROBOT_VACUUM_GUIDE_CARD.imageAlt })).toBeInTheDocument();
    expect(screen.getByText(ROBOT_VACUUM_GUIDE_CARD.imageBadge)).toBeVisible();
    expect(screen.getByText(ROBOT_VACUUM_GUIDE_CARD.category)).toBeVisible();
    expect(screen.getByRole('heading', { name: ROBOT_VACUUM_GUIDE_CARD.title })).toBeVisible();
    expect(screen.getByText(ROBOT_VACUUM_GUIDE_CARD.description)).toBeVisible();
    expect(screen.getByText(ROBOT_VACUUM_GUIDE_CARD.updatedLabel)).toBeVisible();
    expect(screen.getByRole('link', { name: /ler guia/i })).toHaveAttribute(
      'href',
      ROBOT_VACUUM_GUIDE_CARD.href,
    );
  });
});
