import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
	}

	assertLogo() {
		cy.get(".navigation img[alt='10clouds logo']").should('be.visible')
		
	}

	assertTitle() {
		cy.title().should('eq', 'FinTech and Blockchain Software Development | 10Clouds')

	}
	
}