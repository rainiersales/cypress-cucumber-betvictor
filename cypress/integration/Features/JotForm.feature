@Regression
Feature: Validate form submission scenarios
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
