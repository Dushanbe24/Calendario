/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('Visit Calendario like User', () =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('verifying Calendario title', ()=>{
        cy.visit('https://time.is/es/calendar')
        cy.title().should('eq','Calendario del 2023 - Time.is')
    })
    
    it('Choose month',()=>{
        cy.visit('https://time.is/es/calendar')
        cy.get('#thismonth').should('be.visible')

    })
    
    it('Can see all weeks', ()=> {
        cy.visit('https://time.is/es/calendar')
        cy.get('#thismonth').should('be.visible')
        cy.xpath('//*[@id="thismonth"]/table/tbody/tr[1]').should('be.visible')
        cy.xpath('//*[@id="thismonth"]/table/tbody/tr[1]').contains('V')
        cy.xpath('//*[@id="d_2023_7_7_27"]').contains('7')

})

})