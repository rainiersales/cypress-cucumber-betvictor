import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SignatureGenerator from "../../common/SignatureGenerator";
import DateGenerator from "../../common/DateGenerator";

const FIRST_NAME = cy.faker.name.firstName();
const LAST_NAME =  cy.faker.name.lastName();
const RANDOM_PHASE = cy.faker.lorem.words();
const DATE_OF_BIRTH = DateGenerator.randomDate(new Date(Cypress.env('from'), 1, 1), new Date(Cypress.env('to'), 1, 1))
const BASE_URL = Cypress.env('baseUrl');

Given(`I navigate to jotform`, () => {
    cy.visit(BASE_URL);
    cy.url().should('eq', BASE_URL);
    cy.get('#header_welcomePage').should('have.text', 'Test Form')
    cy.get('#jfCard-welcome-start').should('have.text', 'Next').click()
});

When(`I fill the form first name and last name`, () => {
    //FirstName
    cy.get('#sublabel_3_first').should('have.text', 'First Name')
    cy.get('#first_3').type(FIRST_NAME);

    //LastName
    cy.get('#sublabel_3_last').should('have.text', 'Last Name')
    cy.get('#last_3').type(LAST_NAME);

    //Click in the button next
    cy.get('.isVisible [aria-label="Next"]').should('have.text', 'Next').click()
});

And(`I attach a file from my computer`, () => {
    //upload picture
    cy.get('input[type="file"]').attachFile('testPicture.png');

    //Click in the button next
    cy.get('.isVisible [aria-label="Next"]').should('have.text', 'Next').click()
});

And(`I draw my signature`, () => {
    //Create random signature
    SignatureGenerator.generateRandomSignature('#sig_pad_7',400,200);

    //Click in the button next
    cy.get('.isVisible [aria-label="Next"]').should('have.text', 'Next').click()

});

And(`I type my date of birth`, () => {
    //Create random date of birth
    cy.get('#lite_mode_10').type(DATE_OF_BIRTH)

    //Click in the button next
    cy.get('.isVisible [aria-label="Next"]').should('have.text', 'Next').click()
});

And(`I select a security question and create a answer`, () => {
    //Select a random security question
    cy.get('div.jfDropdown-chipContainer').click()
    cy.get('#jfDropdown-optionList-11-mixed-dropdown').click()

    //Create a random security answer
    cy.get('#input_11_field_2').type(RANDOM_PHASE)
});

And(`I submit the form`, () => {
        // set up the listener before the action that will cause reroute
        //TODO: https://github.com/cypress-io/cypress/issues/7083
        cy.on('window:before:load', (win) => {
            cy.get('.isVisible [aria-label="Submit"]').click()
        })
});

Then(`my submission is confirmed to me`, () => {
    //validate the url after sumbit the form
    cy.url().should('eq', BASE_URL);
});






