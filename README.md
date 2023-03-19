# TechnicalTest

## Description

This test automation projects uses Cypress as testing tool along with cypress-cucumber-preprocessor package to add a Gherkin (Cucumber style) BDD layer on top of the tests.

## Folder structure

The Gherkin/Cucumber style features are defined in the .feature files.
The step definitions that implement the gherkin syntax are gathered under the "step_definitions" folder.
Additional support functions are stored under the "actions" folder.

## Test scenario information 

Under Integration/info folder, there is a README file that contains information about every feature that is implemented.

## About the Test Scenarios

Every test scenario

## Installation

To install the project, run npm install

## Run tests

To run the tests in open mode (while watching the browser executing the test) run: npx cypress open. It is possible to select the 3 features and run them individually or run all of 3 in the same execution.

To run the tests in headless mode, run: npx cypress run
