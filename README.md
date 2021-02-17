# Cypress-Cucumber 
### [BET VICTOR]
Sample using of Cypress with Cucumber to demonstrate automation skills.

### Reports
https://dashboard.cypress.io/projects/k2c9bq/runs/1/overview

### Run scenarios tests in terminal
```
npm install
npm test
```  
```
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  Features/JotForm.feature                 00:09        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:09        1        1        -        -        -  

```
### Run scenarios with cypress interface
```
yarn run cypress open
```  

# Tags usage

### Tagging tests
You can use tags to select which test should run using cucumber's tag expressions
eg. `'@regression'`.

To make things faster and skip cypress opening a browser for every feature file (taking a couple seconds for each one), 
even the ones we want ignored, we use our own cypress-tags wrapper. It passes all the arguments to cypress, 
so use it the same way you would use cypress CLI. The only difference is it will first filter out the files we don't care about, 
based on the tags provided. 

### Example:

```
@Regression
Feature: Validate the features implemented in the Home Page
  As a user
  I would like to validate my JotForm
  So that in order to be able validate the Form behavior.

  Scenario: Fill the JotForm with properly data and submit
    Given I navigate to jotform
    When I fill the form first name and last name
      And I attach a file from my computer
      And I draw my signature
      And I type my date of birth
      And I select a security question and create a answer
      And I submit the form
    Then my submission is confirmed to me
```