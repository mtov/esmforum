describe('Primeiro teste E2E do ESM Forum', () => {
  it('Cadastrando uma pergunta', () => {
    cy.visit('/')
    cy.get('table').find('tr').eq(1).find('td').eq(0).should('have.text', 'Como eu faço para remover um determinado elemento de um array em JavaScript?');
    cy.get('table').find('tr').eq(1).find('td').eq(1).should('have.text', 2);
    cy.get('table').find('tr').should('have.length', 6);

    cy.get('textarea[name="pergunta"]').should('be.visible').type('Quanto é 1+1?');
    cy.get('input[type="submit"]').should('be.visible').click();
    cy.contains('Sua pergunta foi cadastrada com sucesso.').should('be.visible');

    cy.visit('/');
    cy.get('table').contains('Quanto é 1+1?');
  })
})
  
