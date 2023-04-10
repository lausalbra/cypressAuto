/// <reference types="Cypress"/>
describe("Test de contac en la web de webdriverUni",() =>{
    it("Debe poder enviar un formulario exitoso a través de contáctanos,", () =>{
    
        //cy.visit("http://webdriveruniversity.com")//Lo ideal es acceder directamente al formulario,
        //cy.get('#contact-us').click({force: true}) //lo pilla sin el force, pero si se le pone mejor.
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Laura')
        cy.get('[name="last_name"]').type('Salgado')
        cy.get('[name="email"]').type('lau@gmail.com')
        cy.get('textarea.feedback-input').type('TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT')
        cy.get('[type="submit"]').click({force: true}) 
    });
   //only solo ejecuta el test que tenga el only 
    it("Debe poder enviar un formulario exitoso a través de contáctanos, ya que todos los campos son obligatorios", () =>{
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Laura')
        cy.get('[name="last_name"]').type('Salgado')
        //cy.get('[name="email"]').type('lau@gmail.com')
        cy.get('textarea.feedback-input').type('TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT')
        cy.get('[type="submit"]').click({force: true}) 
   
    });
    it.only("Debería poder enviar un envío exitoso a través del formulario de contacto", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Laura");
        cy.get('[name="last_name"]').type("Salgado");
        cy.get('[name="email"]').type("lau@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("No debería poder enviar un envío exitoso a través del formulario de contacto ya que todos los campos son obligatorios", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type("Laura");
        cy.get('[name="last_name"]').type("Salgado");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });

})

