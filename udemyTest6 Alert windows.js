/// <reference types="Cypress" />
describe('Handling alert windows', function()
//Alert windows

{
    
    it('should handle alert windows', function(){
        cy.viewport(1440, 900)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")//cy.visit to visit
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        // window:alert 
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }) 
    })
})
