//cypress
//reference types="Cypress" />

describe ('first test suite', function()
{

    it('my first test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");    

        cy.get('.search-keyword').type('Cau');


    }   )

}


)
