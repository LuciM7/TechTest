const destinationItem = "[data-cy='serp-tour']"
const ageRangeFromMenu = "[data-cy='serp-filters--age-range-list']"

export const selectAgeRange = (ageRange) => {
    cy.get(ageRangeFromMenu).contains(ageRange).click()
    // This wait should be swithched for a cy.intercept of the request(s) that ensure that the page contents are loaded
    cy.wait(3000)
}

export const checkResultsAreCorrect = (languae) => {
    cy.get(destinationItem).filter(':contains("18 to")').should("have.length", 15)
}
