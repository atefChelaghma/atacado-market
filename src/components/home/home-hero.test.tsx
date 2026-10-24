import { render, screen, within } from '@testing-library/react';
import { HOME_HERO_CONTENT } from './home-hero.data';
import { HomeHero } from './home-hero';

describe('HomeHero', () => {
  it('renders the main message and category links', () => {
    render(<HomeHero />);

    expect(
      screen.getByRole('heading', { level: 1, name: HOME_HERO_CONTENT.headline }),
    ).toBeVisible();
    expect(screen.getByText(HOME_HERO_CONTENT.badge)).toBeVisible();

    const navigation = screen.getByRole('navigation', { name: 'Navegue por categoria' });
    HOME_HERO_CONTENT.categories.forEach(({ label, href }) => {
      expect(
        within(navigation).getByRole('link', { name: `${label} — ver guias de compra` }),
      ).toHaveAttribute('href', href);
    });
  });
});
