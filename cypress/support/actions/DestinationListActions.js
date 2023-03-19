const listItem = "[data-cy='serp-tour']"

export const selectFirstDestionationFromList = () => {
    cy.get(listItem).first().find('h4').invoke('text').then((result) => {
        var destination = result;
        cy.wrap(destination).as("destinationName");
    })
    cy.get(listItem).first().find('h4').click()
}

export const checkDestinationRedirectingIsCorrect = () => {
    cy.get("@destinationName").then((destination) => {
        cy.get('h1').should('contain', destination)
    })
}