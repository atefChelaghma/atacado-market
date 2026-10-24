import { render, screen, within } from '@testing-library/react';
import { SITE_NAVIGATION } from './site-header.data';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  it('renders the CRITÉRIO home link and all configured navigation links', () => {
    render(<SiteHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'CRITÉRIO — início' })).toHaveAttribute('href', '/');

    const navigation = screen.getByRole('navigation', { name: 'Navegação principal' });
    const links = within(navigation).getAllByRole('link');

    expect(links).toHaveLength(SITE_NAVIGATION.length);
    SITE_NAVIGATION.forEach(({ label, href }) => {
      expect(within(navigation).getByRole('link', { name: new RegExp(label) })).toHaveAttribute(
        'href',
        href,
      );
    });
  });
});
