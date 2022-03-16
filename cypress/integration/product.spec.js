/// <reference types="cypress" />

context('Funcionalidade Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    
    

    it('Deve adicionar o produto no carrinho', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3111 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()


        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho')
    })
    
    it('Deve abrir a página carrinho', () => { 
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3111 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin').click() 
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

        cy.get('.cart_totals').should('contain', 'Total no carrinho')
            })
    
})