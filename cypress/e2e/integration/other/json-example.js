/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2) //Jones
    });
})