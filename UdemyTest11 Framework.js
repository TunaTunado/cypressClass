/// <reference types="Cypress" /> 

describe('Using example.json', function()
{ 

    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data //this.data is global variable while the second data after the = is not global
        })
    })

it('fills info from the example.json ',function() {

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get(':nth-child(1) > .form-control').type(this.data.name) //for the input
    cy.get('select').select(this.data.gender) // for the gender
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name) //the binding field of the page
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get(':nth-child(2) > .nav-link').click()

    
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)  
    });
     

    
}) 
})