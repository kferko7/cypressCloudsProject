export class BasePage {

    acceptCookies() {
		cy.get('.cookies__StyledCookies-sc-1sokidc-0 > .Buttons__StyledButton-sc-ellota-0').should('be.visible').click({force:true})
	
	}

}