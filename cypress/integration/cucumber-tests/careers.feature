Feature: CareersPage

Background: Positive Access: I Navigate to 10Clouds and web is accessible
        Given I open website 10Clouds and accept cookies
        And I assert logo 10Clouds is displayed
        And  I verify title is FinTech and Blockchain Software Development | 10Clouds
        

Scenario: Open Careers tab and validate Senior QA Automation Engineer
    When I click on Careers link and am landing on careers page
    Then  I Select QA from All departments dropdown
    And I Validate that each result contains QA Automation or QA Engineer in the title



