/// <reference types="Cypress" />
describe('Rock Paper Scissors', () => {
  it('Test game logic.', () => {
    cy.visit('http://127.0.0.1:8887')

    cy.get('#username')
      .type('Tony')
      .should('have.value', 'Tony')
      
    cy.get("#start-game-button")
      .click()
    
    cy.get('#user-selection')
      .select('Paper')

    cy.get("#go-button")
      .click()

    cy.get('#user-selection')
      .select('Rock')

    cy.get("#go-button")
      .click()

    cy.get('#game-history')
      .should('contain', 'Tony selected paper.')
      .should('contain', 'Tony selected rock.')
  })
})