import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { CareersPage } from '../pages/PageObjects/CareersPage'


const careersPage = new CareersPage()

When('I click on Careers link and am landing on careers page', () => {
    careersPage.selectCareersLink()
})

Then('I Select QA from All departments dropdown', () => {
    careersPage.selectAllDepartments()

})

And('I Validate that each result contains QA Automation or QA Engineer in the title', () => {
    careersPage.assertQaAutomation()
})