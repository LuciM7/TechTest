# Test scenario explanation

## DestinationSelection.feature

The objective of this test is to assert that when I click on any destination, I get redirected to the webpage of that specific destination. I check that, after clicking on a destination, the url I get redirected to is the correct one by asserting that the destination name I've previously clicked on matches the one that appears in the page I've been redirected to.

## Filter.feature

The objective of this test is to assert that when I filter by age range, all the results I get will match that age range. To do so, I select an specific age range, wait until the page is fully loaded (I added a cy.wait that should be switched to a cy intercept of the main request to assert that the page is correctly loaded) and assert that, within the 15 first results I get by default, all of them contain the selected age range. I count the occurences and assert the total number is 15.

## UserMenu.feature

The objective of this test is to assert that if I visit the page as an unregistered user, once I click on the user menu to toggle the drop down, and I click on the "Log in" button, I get redirected to the login page. I do so by asserting that the url I'm redirected to matches the login url.