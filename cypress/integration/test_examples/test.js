//cypress
//reference types="Cypress" />

describe ('first test suite', function()
{

    it('my first test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");    

        cy.get('.search-keyword').type('Cau');


    }   )

    it('my second test case',function(){
        cy.visit("https://rahulshettyacademy.com/");    


    }   )

    it('my third test case',function(){
        cy.visit("https://confignepal.com/");    


    }   )
}


)
