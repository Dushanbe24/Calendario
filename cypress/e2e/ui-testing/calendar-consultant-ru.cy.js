/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('Visit Calendar Consultant', () =>{
    beforeEach(() => {
        cy.visit('http://www.consultant.ru/');
    });

    it('Verify the link title',()=>{
        cy.title().should('eq','"КонсультантПлюс" - законодательство РФ: кодексы, законы, указы, постановления Правительства Российской Федерации, нормативные акты')
    })

    it('Type and click search bar',()=>{
        cy.get('.search__input').type('Производственный календарь')
        cy.contains('Найти').click()
        //cy.get('[class=seo-links__item]').eq(12).click()
        cy.xpath('//*[@id="seoLinks"]/ul/li[13]').click()
    })


    it('View the calendar section',()=>{
        cy.get('.search__input').type('Производственный календарь')
        cy.contains('Найти').click()
        cy.get('[class=seo-links__item]').eq(12).click()
        cy.url().should("include", "law/ref/calendar/proizvodstvennye/2023/")
    })

    it('Choose month and day',()=>{
        cy.visit('http://www.consultant.ru/law/ref/calendar/proizvodstvennye/2023/')
        cy.get('.col-md-3').eq(25).contains(7)
    })
})