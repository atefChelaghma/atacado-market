import { render, screen, within } from '@testing-library/react';
import { FOOTER_DESCRIPTION, FOOTER_LINK_GROUPS, FOOTER_SOCIAL_LINKS } from './site-footer.data';
import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  it('renders its description, link groups, and legal information', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(FOOTER_DESCRIPTION)).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();

    FOOTER_LINK_GROUPS.forEach(({ label, links }) => {
      const group = screen.getByRole('navigation', { name: label });
      links.forEach(({ label: linkLabel, href }) => {
        const item = within(group).getByText(linkLabel);
        if (href) {
          expect(item.closest('a')).toHaveAttribute('href', href);
        } else {
          expect(item).toHaveAttribute('aria-disabled', 'true');
        }
      });
    });
  });

  it('exposes social destinations with accessible names', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('list', { name: 'Redes sociais e feed' })).toBeInTheDocument();
    FOOTER_SOCIAL_LINKS.forEach(({ label, href }) => {
      if (href) {
        expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href);
      } else {
        expect(
          screen.getByRole('img', { name: `${label} — link não configurado` }),
        ).toBeInTheDocument();
      }
    });
  });
});
