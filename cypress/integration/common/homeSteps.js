import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { HomePage } from '../pages/PageObjects/HomePage'
//import * as LoginData from '../../fixtures/loginData.json'

const homePage = new HomePage()

//1.Positive Scwenario: Login with valid credentials into Login form
Given('I open website 10Clouds and accept cookies', () => {
	homePage.visit()
	homePage.acceptCookies()
		
})

And('I assert logo 10Clouds is displayed', () => {
	homePage.assertLogo()

})

And('I verify title is FinTech and Blockchain Software Development | 10Clouds', () => {
	homePage.assertTitle()	

})