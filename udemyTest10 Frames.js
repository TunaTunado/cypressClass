/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" /> 
import 'cypress-iframe' //we can't forget to import iframe!!!

describe('Handling Frames', function()
{ 
it('gets information from Frames ',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe")

cy.iframe().find("a[href*='mentorship']").eq(0).click()

cy.iframe().find("h1[class*='pricing-title']").should('have.length',2) //lenght here is meant for the h1, so as we have 2 we compare with those 2 already there.

}) 
})