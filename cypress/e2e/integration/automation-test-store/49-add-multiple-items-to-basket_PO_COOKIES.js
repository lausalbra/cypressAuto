import AutoStore_Homepage_PO from '../../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    })
  });

  beforeEach(function () {
    //lO USAMOS PARA BORRAR LAS COOKIES
    
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_Homepage_PO.accessHomepage();
    autoStore_Homepage_PO.clickOn_HairCare_Link();
  });
  it("Add specific items to basket", () => {
      globalThis.data.productName.forEach(function(element) {
          cy.addProductToBasket(element)
      })
      cy.get('.dropdown-toggle > .fa').click();
  });
});
