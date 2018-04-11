describe('Chat', function () {
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

    it('check if delete functionality works properly with command /oops', function () {
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('Hello, World');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 1);

        cy.get('.Sender__container').find('input')
        .type('/oops');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 0);
    })

    it('check if you add any text with /oops command, nothing is sent, just the command to delete', function () {
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('Hello, World');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 1);

        cy.get('.Sender__container').find('input')
        .type('/oops whatever');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 0);
    })

    it('check if a command is in the middle of the text the comman doesnt works', function () {
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.get('.Sender__container').find('input')
        .type('Hello, World');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 1);

        cy.get('.Sender__container').find('input')
        .type('whatever /oops whatever');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Sender__container').find('input')
        .type('whatever /think whatever');

        cy.get('.Sender__container').find('input')
        .type('{enter}');

        cy.get('.Bubble__container.mine').should('have.length', 3);
        cy.get('.Bubble__container.mine.think').should('have.length', 0);
    })

    it('check when you send messages from other socket see them as others messages', function () {
        cy.get('.Bubble__container').should('have.length', 0);

        cy.request('http://localhost:8081/connect')

        cy.request("http://localhost:8081/message/?q=hello")
        
        cy.get('.Bubble__container').should('have.length', 1);
        cy.get('.Bubble__container.mine').should('have.length', 0);

        cy.request('http://localhost:8081/disconnect');
    })

    it('check check when other user send command /nick is shown in the header', function () {
        cy.request('http://localhost:8081/connect')

        cy.request("http://localhost:8081/message/?q=/nickPablo")
        
        cy.get('.Bubble__container').should('have.length', 0);

        cy.get('.Header__container').should('have.length', 1);

        cy.get('.Header__container').contains('Conversation with Pablo').should('have.length', 1);

        cy.request('http://localhost:8081/disconnect');
    })
});