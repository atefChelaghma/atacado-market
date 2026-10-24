describe('Homepage discovery journey', () => {
  it('navigates from the category links to the featured buying guides', () => {
    cy.visit('/');

    cy.findByRole('heading', { level: 1, name: /compre melhor/i }).should('be.visible');
    cy.get('html').should('have.attr', 'lang', 'pt-BR');
    cy.findByText('© 2024 CRITÉRIO Editorial Ltda.', { exact: false }).should('be.visible');
    cy.findByRole('navigation', { name: 'Navegação principal' })
      .findByRole('link', { name: 'Guias de Compra' })
      .click();

    cy.location('hash').should('eq', '#guias-de-compra');
    cy.findByRole('heading', { level: 2, name: 'Guias de Compra em Destaque' }).should(
      'be.visible',
    );
    cy.findByRole('region', { name: 'Guias de Compra em Destaque' })
      .findAllByRole('link', { name: /ler guia/i })
      .should('have.length', 4);
    cy.findByRole('link', { name: 'Café & Cozinha — ver guias de compra' }).should('be.visible');
  });
});
