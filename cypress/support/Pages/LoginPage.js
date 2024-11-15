// cypress/support/pages/loginPage.js

class LoginPage {
    visit() {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
    }

    fillEmail(email) {
        cy.get('#email').type(email);
    }

    fillPassword(password) {
        cy.get('#pass').type(password);
    }

    submitForm() {
        
       // cy.get('button[title="Sign In"]').click();
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    }

    checkSuccessfulLogin() {
        cy.contains("Welcome").should("be.visible");
    }
}

// Exporting an instance of the LoginPage class
export default new LoginPage();
