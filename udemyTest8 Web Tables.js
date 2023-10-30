/// <reference types="Cypress" /> 
describe('Handling web tables', function()
{ 
it('gets price from row course',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text() //create variable tomake easier to get the text so now we grab the text of each column
    if(text.includes("simple Python")) //we could add more text instead of only adding python for example simple Python Language
    { 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) //.next() gets the next sibling so we got here the 2nd column, used .next() to go to the next sibling, that is the price column
        {
         const priceText = price.text()
         expect(priceText).to.equal('25')
        })
    } 
}) 
}) 
})