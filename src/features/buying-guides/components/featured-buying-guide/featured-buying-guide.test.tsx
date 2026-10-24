import { render, screen, within } from '@testing-library/react';
import { FEATURED_ESPRESSO_GUIDE } from './featured-buying-guide.data';
import { FeaturedBuyingGuide } from './featured-buying-guide';

describe('FeaturedBuyingGuide', () => {
  it('renders guide metadata, badges, highlights, and the destination link', () => {
    render(<FeaturedBuyingGuide guide={FEATURED_ESPRESSO_GUIDE} />);

    expect(
      screen.getByRole('heading', { level: 2, name: FEATURED_ESPRESSO_GUIDE.title }),
    ).toBeVisible();
    expect(
      screen.getByRole('img', { name: FEATURED_ESPRESSO_GUIDE.image.alt }),
    ).toBeInTheDocument();
    expect(screen.getByText(`Por ${FEATURED_ESPRESSO_GUIDE.metadata.author}`)).toBeVisible();
    expect(screen.getByText(FEATURED_ESPRESSO_GUIDE.metadata.updatedLabel)).toBeVisible();
    expect(screen.getByText(FEATURED_ESPRESSO_GUIDE.metadata.testedModelsLabel)).toBeVisible();

    const highlights = screen.getByRole('list', { name: 'Destaques do guia' });
    FEATURED_ESPRESSO_GUIDE.tags.forEach((tag) =>
      expect(within(highlights).getByText(tag)).toBeVisible(),
    );

    expect(screen.getByRole('link', { name: /ler guia completo/i })).toHaveAttribute(
      'href',
      FEATURED_ESPRESSO_GUIDE.href,
    );
  });
});
