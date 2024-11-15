
import signupPage from '../support/Pages/SignupPage' 
import loginPage from '../support/Pages/LoginPage'

describe('Magento Signup and Login Flow', () => {
    const userEmail = `user_${Date.now()}@example.com`;  // Unique email for each test run
    const userPassword = 'StrongPassword123!';

    it('should create a new account successfully', () => {
        // Given user is on the signup page
        signupPage.visit();

        // When user fills in all required details and submits
        signupPage.fillFirstName("John");
        signupPage.fillLastName("Doe");
        signupPage.fillEmail(userEmail);
        signupPage.fillPassword(userPassword);
        signupPage.fillConfirmPassword(userPassword);
        signupPage.submitForm();

        // Then account is created successfully
        signupPage.checkSuccessfulSignup();
    });

    it('should log in with the newly created account', () => {
        // Given user has an account and is on the login page
        loginPage.visit();

        // When user fills in valid credentials and submits
        loginPage.fillEmail(userEmail);
        loginPage.fillPassword(userPassword);
        loginPage.submitForm();

        // Then user should be successfully logged in
        loginPage.checkSuccessfulLogin();
    });
});
