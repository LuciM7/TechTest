Feature: Filtering on main webpage

    Scenario: Apply operator filter and validate results
        Given I visit the TourRadar home page
        When I select "18 to 39" age range
        Then I should only get destinatios that are operated in the selected range

    