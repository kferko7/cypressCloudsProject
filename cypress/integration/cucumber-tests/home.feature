Feature: HomePage

    Scenario: Positive Access: I Navigate to 10Clouds and web is accessible
        Given I open website 10Clouds and accept cookies
        And I assert logo 10Clouds is displayed
        And I verify title is FinTech and Blockchain Software Development | 10Clouds
        
        