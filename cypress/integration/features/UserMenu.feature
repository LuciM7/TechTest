Feature: Access login page

    Scenario: Access login page from home page
        Given I visit the TourRadar home page
        And I click on the user menu to display the dropdown 
        When I click on the Login button within the dropdown
        Then I get redirected to the login page