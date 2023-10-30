/// <reference types="Cypress" />
describe('Handling child windows', function()
//Child Windows
{
    
    it('should handle child windows/tabs', function(){
        cy.viewport(1440, 900)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")//cy.visit to visit
        cy.get("#opentab").invoke('removeAttr', 'target').click()
        /* cy.origin("https://www.qaclickacademy.com",()=> //use this function to say to cypress you will use this webpage as next domain.
        {

        })*/

        cy.get('.navbar-nav > :nth-child(4) > a').click()
        cy.get('.col-lg-5 > .section-title > h2').should('contain', 'Welcome to QAClick Academy')
    })
})
