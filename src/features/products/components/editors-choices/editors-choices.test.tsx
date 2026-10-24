import { render, screen, within } from '@testing-library/react';
import { EDITORS_CHOICES } from './editors-choices.data';
import { EditorsChoices } from './editors-choices';

describe('EditorsChoices', () => {
  it('renders products in editorial order and links to the verdict list', () => {
    render(<EditorsChoices />);

    expect(screen.getByRole('heading', { level: 2, name: 'Escolhas dos Editores' })).toBeVisible();
    const list = screen.getByRole('list', { name: 'Vereditos de produtos' });
    const items = within(list).getAllByRole('listitem');

    expect(items).toHaveLength(EDITORS_CHOICES.length);
    EDITORS_CHOICES.forEach(({ productName }, index) => {
      expect(within(items[index]).getByRole('heading', { name: productName })).toBeVisible();
    });
    expect(screen.getByRole('link', { name: /ver todos os vereditos/i })).toHaveAttribute(
      'href',
      '/#vereditos',
    );
  });
});
