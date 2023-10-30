/// <reference types="Cypress" />
describe('Test 5 Udemy', function()
//Upgrading Test 4 and messing with checkbox, text box and stuff

{
    
    it('Upgrading test 4', function(){
        cy.viewport(1440, 900)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")//cy.visit to visit
        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //verify if it was checked. Use and to user more should insted of should.. should.. should..
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //now static dropdowns
        //cy.get('#dropdown-class-example')
        cy.get('select').select('option2').should('have.value','option2') //same as above, but using different calls
        robotframework-seleniumlibrary
        //dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        cy.wait(1000)

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()==="India")
            {
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India') //validate if the text is right.

        //handling visible and invisilbe stuff
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})
