/// <reference types="Cypress"/>
describe("Test de contac en la web de webdriverUni",() =>{
    it.only("Debe poder enviar un formulario exitoso a través de contáctanos,", () =>{
    
        cy.visit("https://automationteststore.com")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath('//*[@id="footer"]/footer/section[2]/div/div[1]/div/ul/li[5]/a').click();
        cy.get('#ContactUsFrm_first_name').type('Laura');
       //cy.get('#ContactUsFrm_email').should('have.attr', 'name','email');
        cy.get('[name="email"]').type('lau@gmail.com');
        //cy.xpath('//*[@id="ContactUsFrm_email"]').click()
        cy.get('#ContactUsFrm_enquiry').type('TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT');
        cy.get('.col-md-6 > .btn').click();
        //cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');
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

})
