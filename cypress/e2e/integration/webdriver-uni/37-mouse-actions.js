/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        //Uso scrollIntoView para bajar
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    
        //Esta seleccionado el cuadrito pequeño (draggable) y clicando en el con el mosuedown
        cy.get('#draggable').trigger('mousedown', {which: 1});
        //Esta seleccionando el cuadro grande (droppable) a donde quiere arrastrar el pequeño
        //mousemove mueve el raton y mouseuo deja el cuadrito en el cuadro grande
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it.only("I should be able to perform a double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#double-click').dblclick();
    });

    it("I should be able hold down the left mouse click button on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            //hace la coprobacion de que el color de fondo cambia a rojo
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
}) 