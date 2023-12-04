/// <reference types="Cypress" /> 
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductsPage"
describe('Using example.json', function()
{ 

    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data //this.data is global variable while the second data after the = is not global
        })
    })

it('fills info from the example.json but upgrading and using pageObjects ',function() {
    Cypress.config('defaultCommandTimeout', 8790)
    const homePage = new HomePage() //create this object! dont forget
    const productPage = new ProductPage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.getEditBox().type(this.data.name) //for the input
    homePage.getGender().select(this.data.gender) // for the gender
    homePage.getTwoWayDataBinding().should('have.value', this.data.name) //the binding field of the page
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()

    
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)  
    });
    productPage.clickCheckout().click()
    var sum = 0
    
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    //cy.log($el.text()) used to see if it was grabbing the values
    // ₹. 85000 actual value, we have to split, and separate and erase before the number.
        // splitvalue[0]= ₹. 
        // splitValue[1]= 65000
    const amount = $el.text()        
    var splitValue=amount.split(" ")
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
})