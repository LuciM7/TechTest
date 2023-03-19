Feature: Destination selection from the list

    Scenario: Select the first destination (default) from the list

        Given I visit the TourRadar home page
        When I select the first destination that appears on the list
        Then I get redirected to the page of that destination

        
