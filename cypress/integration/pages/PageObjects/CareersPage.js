import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class CareersPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/careers`)
	}

	selectCareersLink() {
		cy.get(':nth-child(8) > .Link__NavLink-sc-1ryxvh0-1 > span')
			.should('be.visible', {
				timeout: 10000,
			})
			.click({ force: true })
	}

	selectAllDepartments() {
		cy.get('div:nth-of-type(1) > .select--desktop').should(
			'have.text',
			'All departmentsDepartment'
		).click({ force: true })

		cy.get('.gtOWxA > ul > :nth-child(9)').click()

	}

	assertQaAutomation() {
		cy.get('h2').contains('Senior QA Automation Engineer').should('be.visible')
	}
}
