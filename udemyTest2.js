/// <reference types="Cypress" />
describe('Test 2 Udemy', function()
//First simple code to just add products on the cart.
{
    
    it('my first test case', function(){
        cy.viewport(1440, 900),
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); //cy.visit to visit
        cy.get('.search-keyword').type('ca'); //search for the CSS selector and type
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4) //used visible here because when not on the search it hides others

        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)

        //no parent child cahining WARNING! if you increase products, disable, inivislbe etc this can break and click on the wrong product
        cy.get(':nth-child(3) > .product-action > button').click()
        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {

            const vegetableText=$el.find('h4.product-name').text()
            if(vegetableText.includes('Cashews'))
            {
                $el.find('button').click()
            }
            
        })
        //get the text of the logo
        //non cypress commands cant resolve promises by themselves, we have to maanually resolve them using then() method
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        //const logo=cy.get('.brand')
        
    })

})