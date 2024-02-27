describe('Navigation Links', () => {
  it('should navigate to different sections when clicking on navigation links', () => {
    cy.visit('https://amalicustomerpage.netlify.app/');

    cy.contains('a', 'About Us').click();
    cy.url().should('include', '#about');

    cy.contains('a', 'Contact Us').click();
    cy.url().should('include', '#contact');

    cy.contains('a', 'Home').click();
    cy.url().should('include', '#home');
  });
});
