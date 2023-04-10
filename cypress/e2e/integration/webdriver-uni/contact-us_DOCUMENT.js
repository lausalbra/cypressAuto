/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Laura");
        cy.get('[name="last_name"]').type("Salgado");
        cy.get('[name="email"]').type("lau@gmail.com").pause(); //pause relentiza la animación
        cy.get('textarea.feedback-input').type("TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        cy.log("Test has completed!");
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})