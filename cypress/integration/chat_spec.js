describe('Kitchen Sink', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000/')
    })

    it('check all the elements are present in the first load', function () {
        cy.get('.Sender__container').should('have.length', 1);

        cy.get('.Sender__container').find('.input-message')
        .should('have.length', 1);

        cy.get('.Sender__container').find('.send-button')
        .should('have.length', 1);
    })

    it('check you can type in the input and send a message clicking the button', function () {
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('Hello, World');

        cy.get('.Sender__container').find('button').click()

        cy.get('.Bubble__container.mine').should('have.length', 1);
    })

    it('check send a message pressing enter', function () {
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('Hello, World');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 1);
    })

    it('check if you add no text sends nothing', function () {
        cy.get('.Bubble__container').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('button').click();

        cy.get('.Bubble__container.mine').should('have.length', 0);
    })

    it('check if you send any command /think without text sends nothing', function () {
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('/think');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 0);
    })
});