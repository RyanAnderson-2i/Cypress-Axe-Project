/// <reference types="cypress"/>

describe('Todo application', () => {

    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react')
        cy.injectAxe()
      })
    
    it('should log any accessibility failures', () =>{
        cy.visit('http://todomvc.com/examples/react')
        cy.injectAxe()
        cy.checkA11y()
    })

    // Basic usage
it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
    cy.checkA11y()
  })

  
  // Applying a context and run parameters
  it('Has no detectable a11y violations on load (with custom parameters)', () => {
    // Test the page at initial load (with context and options)
    cy.checkA11y('.example-class', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a']
      }
    })
  })
  
  it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(null, {
      includedImpacts: ['critical']
    })
  })
  
  //Basic usage after interacting with the page
  it('Has no a11y violations after button click', () => {
    // Interact with the page, then check for a11y issues
    cy.get('button').click()
    cy.checkA11y()
  })
  
  it('Only logs a11y violations while allowing the test to pass', () => {
    // Do not fail the test when there are accessibility failures
    cy.checkA11y(null, null, null, true)
  })
  
  it('Has no a11y violations after asynchronous load', () => {
    // Retry the check if there are initial failures
    cy.checkA11y(null, {
      retries: 3,
      interval: 100
    })
  })
})