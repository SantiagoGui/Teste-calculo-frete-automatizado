describe('Testando o fluxo do formulário de produto', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1366, 768);
        cy.visit('https://web.superfrete.com/');
        cy.wait(1000); 
    });

    it('Deve submeter um produto válido com sucesso', () => {
        cy.submitProduct('validProduct');
        cy.get('.sc-gYrqIg').should('contain', 'Mini Envios')
        cy.get('.sc-gYrqIg').should('contain', 'PAC')
        cy.get('.sc-gYrqIg').should('contain', 'SEDEX')
    });

    it('Deve exibir um erro de altura minima', () => {
        cy.submitProduct('invalidProductAlt');
        cy.get('#packageHeight-helper-text').should('contain', 'Altura mínima 0.4 cm.')

    });

    it('Deve exibir um erro de Largura minima', () => {
        cy.submitProduct('invalidProductLarg');
        cy.get('#packageWidth-helper-text').should('contain', 'Largura mínima 8 cm.')

    });

    it('Deve exibir um erro de comprimento minima', () => {
        cy.submitProduct('invalidProductComp');
        cy.get('#packageDepth-helper-text').should('contain', 'Comprimento mínimo 13 cm.')

    });

    it('Deve exibir um erro de cpf  de origem obrigatorio', () => {
        cy.submitProduct('invalidProductSaida');
        cy.get('#originPostcode-helper-text').should('contain', 'CEP de origem é obrigatório')

    });

    it('Deve exibir um erro de cpf  de origem destino', () => {
        cy.submitProduct('invalidProductChegada');
        cy.get('#destinationPostcode-helper-text').should('contain', 'CEP de destino é obrigatório')

    });


});