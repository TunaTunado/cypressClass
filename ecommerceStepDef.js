import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductsPage";
const homePage=new HomePage()
const productPage = new ProductPage()
const data = require('/Programming/CypressAutomation/cypress/fixtures/example.json')
let sum
let name


Given('I open ECommerce page',function() {
    cy.visit(Cypress.env('url')+"angularpractice/")
})

When('I add items to cart',function() {
    homePage.getShopTab().click()    
    data.productName.forEach(function(element) {
    cy.selectProduct(element)  
    });
    productPage.clickCheckout().click()
})

Then('Validate the total prices',function() {
    let sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text()        
        var splitValue = amount.split(" ")
        splitValue = splitValue[1].trim()
        sum = Number(sum) + Number(splitValue) //use number() to make the string become a number       
    
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 > strong').then(function(element)
        {
        const amount = element.text()        
        var splitValue=amount.split(" ")
        var totalCart = splitValue[1].trim()
    
        expect(Number(totalCart)).to.equal(sum)
        })

})

Then('Select the country submit and verify Thank you',function() {
    cy.contains('Checkout').click()
    cy.get('#country').type('italy')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox').click()
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
    cy.get('.alert').then(function(element)
    {
        const actualText=element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})


When('I fill the form details',function(dataTable) {
    name = dataTable.rawTable[1][0] 
    homePage.getEditBox().type(dataTable.rawTable[1][0]) //for the input
    homePage.getGender().select(dataTable.rawTable[1][1]) // for the gender
})

Then('Validate the forms behaviour',function() {
    homePage.getTwoWayDataBinding().should('have.value', name) //the binding field of the page
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8790)
})

Then('Select the shop page',function() { //change AND for Then here!!! important to remember

    homePage.getShopTab().click()
})
