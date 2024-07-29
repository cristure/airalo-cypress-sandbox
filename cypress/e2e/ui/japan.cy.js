import japanPlan from '../../fixtures/japanPlan.json'

context('UI testing', () => {
  describe('japan plan', () => {
    beforeEach(() => {
      cy.setCookie('Airalo.10million', "true", {
        path: '/',
        domain: "www.airalo.com",
        expires: "Session",
        size: 20,
      })
      cy.visit(Cypress.env().url)
    })

    it('passes', () => {

      //Type in Japan.
      cy.get('[data-testid="search-input"]')
          .type("Japan")

      cy.get('[data-testid="Japan-name"]')
          .should("be.visible")
          .click()

      // Click on the respective button.
      cy.get('[data-testid="esim-button"]')
          .eq(0)
          .click()


      // Assert the details in the pop-up match the expected values.
      cy.get('[data-testid="sim-detail-operator-title"]')
          .contains(japanPlan.title)

      cy.get('[data-testid="COVERAGE-row"]')
          .contains("COVERAGE")

      cy.get('[data-testid="COVERAGE-value"]')
          .contains(japanPlan.coverage)

      cy.get('[data-testid="DATA-row"]')
          .contains("DATA")

      cy.get('[data-testid="DATA-value"]')
          .contains(japanPlan.data)

      cy.get('[data-testid="VALIDITY-row"]')
          .contains("VALIDITY")

      cy.get('[data-testid="VALIDITY-value"]')
          .contains(japanPlan.validity)

      cy.get('[data-testid="PRICE-row"]')
          .contains("PRICE")

      cy.get('[data-testid="PRICE-value"]')
          .contains(japanPlan.price)
    })

  })
  }
)
