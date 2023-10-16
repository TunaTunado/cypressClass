/// <reference types="Cypress" />
describe('Tests Udemy', function()
//First simple code to just add products on the cart.
//Now we will try to make it optimized
{
    
    it('Upgrading test 3', function(){
        cy.viewport(1440, 900)
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")//cy.visit to visit
        cy.get('.search-keyword').type('ca'); //search for the CSS selector and type
        cy.wait(2000)
        
        //parent child chaining
        cy.get('.products').as('productLocator') //creating this alias, if in future something changes, we change only in one place.
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const vegetableText=$el.find('h4.product-name').text()
            if(vegetableText.includes('Cashews'))
            {
                $el.find('button').click()
            }            
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)
        // cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click() using the cypress copy on the inspector
        cy.contains('Place Order').click() //now we make it more unique both methods work! =D REMEMBER THIS IS CASE SENSITIVE! ;D
    })

})