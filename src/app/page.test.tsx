import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('composes the homepage hero, editorial guide, verdicts, and guide collection', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1, name: /compre melhor/i })).toBeVisible();
    expect(
      screen.getByRole('heading', { level: 2, name: /cafeteiras de espresso/i }),
    ).toBeVisible();
    expect(screen.getByRole('heading', { level: 2, name: 'Escolhas dos Editores' })).toBeVisible();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Guias de Compra em Destaque' }),
    ).toBeVisible();
  });
});
