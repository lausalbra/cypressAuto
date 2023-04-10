/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it.only("Validar un producto específico para el cuidado del cabello hair care", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    //Comprobamos con el eq(numero que sea) de producto y luego comparamos con su nombre.
    cy.get(".fixed_wrapper .prdocutname").eq(1).invoke("text").as("productThumbnail"); 
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Pantene Pro-V Conditioner, Classic Care");
  });
  it("Validar la miniatura del carrito de la compra de los productos", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail')
    //Para poner el nombre del alias tenemos que poner @ delante del alias
    //Son 16 elementos porque en Ranorex Selocity pongo ccs -> ".thumbnail" y salen 16
    cy.get('@productThumbnail').should('have.length', 16)
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
  });
  it.only("Calcular total de productos normales y en oferta", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail')
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text());
    // });
    //le ponemos una etiqueta a cada uno de los precios
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
   //recoger los del precio normal 
    var itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale price items total: " + itemsPriceTotal)
    })
//recorrer los del precio rebajado
    cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < saleItemPrice.length; i++) {
            cy.log(saleItemPrice[i])
            saleItemsPrice += Number(saleItemPrice[i])
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price items total: " + saleItemsPrice)
    })
    .then(() => {
        cy.log("The total price of all products: " + itemsTotal)
        expect(itemsTotal).to.equal(572.45)
    })
  });
});
