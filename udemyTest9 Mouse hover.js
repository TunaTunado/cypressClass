/// <reference types="Cypress" /> 
describe('Handling Mouse hover', function()
{ 
it('gets items from mouse hover menus ',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//cy.get('div.mouse-hover-content').invoke('show') like this we make it appear visually for us, not only internaly.
//cy.get('div.mouse-hover-content').click({force:true}) use like this on click to show the menu internally, visually for us it doesnt appear the hover. But like this is not the best way, because if we use the force:true on the next step we dont need it twice
cy.contains('Top').click({force:true}) //use the force:true to click, so it will make internally the menu to be shown and be able to click
cy.url().should('include','#top') 
}) 
})