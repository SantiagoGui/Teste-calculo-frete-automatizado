// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false para impedir que o Cypress falhe o teste em caso de exceção não tratada
    return false;
  });



  Cypress.Commands.add('submitProduct', (productType) => {
    cy.fixture('produto.json').then((data) => {
      const product = data[productType];
      cy.get('#originPostcode').clear().type(product.cepSaida);
      cy.get('#object_format').click(); 
      cy.get('.Mui-selected').click();
      cy.get('#weight').click(); 
      cy.get('[data-value="0.3"]').click()
      cy.get('#packageHeight').clear().type(product.dimensoes.altura);
      cy.get('#packageWidth').clear().type(product.dimensoes.largura);
      cy.get('#packageDepth').clear().type(product.dimensoes.comprimento);
      cy.get('#destinationPostcode').clear().type(product.cepChegada);
      cy.get('[data-cy="calculator-submit"]').click();
  });

})

