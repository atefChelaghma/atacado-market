import { render, screen } from '@testing-library/react';
import { OSTER_PRIMA_LATTE_SAMPLE } from './product-verdict-card.data';
import { ProductVerdictCard } from './product-verdict-card';

describe('ProductVerdictCard', () => {
  it('renders the verdict, product details, price, and review destination', () => {
    render(<ProductVerdictCard product={OSTER_PRIMA_LATTE_SAMPLE} />);

    expect(screen.getByText(OSTER_PRIMA_LATTE_SAMPLE.verdictLabel)).toBeVisible();
    expect(
      screen.getByRole('heading', { name: OSTER_PRIMA_LATTE_SAMPLE.productName }),
    ).toBeVisible();
    expect(screen.getByText(OSTER_PRIMA_LATTE_SAMPLE.category)).toBeVisible();
    expect(screen.getByText(OSTER_PRIMA_LATTE_SAMPLE.price)).toBeVisible();
    expect(
      screen.getByRole('img', { name: OSTER_PRIMA_LATTE_SAMPLE.image.alt }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: OSTER_PRIMA_LATTE_SAMPLE.retailerLabel }),
    ).toHaveAttribute('href', OSTER_PRIMA_LATTE_SAMPLE.retailerUrl);
    expect(
      screen.getByRole('link', { name: OSTER_PRIMA_LATTE_SAMPLE.reviewLabel }),
    ).toHaveAttribute('href', OSTER_PRIMA_LATTE_SAMPLE.reviewUrl);
  });
});
