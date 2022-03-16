/// <reference types="cypress" />

context('Funcionalidade Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });
    
    

    it('Deve fazer login com sucesso', () => {
        cy.get('#reg_email').type('edu_ebac@teste.com')
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

    
    })
