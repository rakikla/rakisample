

class SignupPage {
    visit() {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
    }

    fillFirstName(name) {
        cy.get('#firstname').type(name);
    }

    fillLastName(name) {
        cy.get('#lastname').type(name);
    }

    fillEmail(email) {
        cy.get('#email_address').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    fillConfirmPassword(password) {
        cy.get('#password-confirmation').type(password);
    }

    submitForm() {
        cy.get('button[title="Create an Account"]').click();
    }

    checkSuccessfulSignup() {
        cy.contains("Thank you for registering").should("be.visible");
    }
}

export default new SignupPage();
