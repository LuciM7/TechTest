const listItem = "[data-cy='serp-tour']";
const itemClass = ".js-ao-serp-tour__name";
const tourRadarUrl = "https://www.tourradar.com";

export const selectFirstDestionationFromList = () => {
    cy.get(listItem).first().find(itemClass).should('have.prop', 'innerText').then((result) => {
        Cypress.env("destination", result)
    })
}

export const checkDestinationRedirectingIsCorrect = () => {
    cy.get(listItem).first().find('a').first().should('have.attr', 'href').then((element) => {
        const urlToVisit = tourRadarUrl + element
        cy.visit(urlToVisit)
        var destinationValue = Cypress.env("destination")
        cy.get('h1').should('contain',destinationValue)
    })
}