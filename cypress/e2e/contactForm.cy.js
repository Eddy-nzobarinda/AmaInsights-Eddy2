describe('Contact Form', () => {
    beforeEach(() => {
        cy.visit('https://amalicustomerpage.netlify.app/');
    });

    it('should clear input fields after clicking send button', () => {
        cy.get('#name').type('Eddy nzobarinda');
        cy.get('#email').type('eddy.nzobarinda@amalitech.org');
        cy.get('#message').type('This is a test message');

        cy.get('#send-button').click();

        cy.get('#name').should('have.value', '');
        cy.get('#email').should('have.value', '');
        cy.get('#message').should('have.value', '');
    });

});
