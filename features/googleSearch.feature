Feature: Google search automation

    As a user I should be able to open Google and
    Serch for webdriverio 

@Google
Scenario Outline: Google search automation
    Given I launch the url "<url>"
    When I search for the keyword "<SearchItem>"
    Then I see the results

    Examples:
        | SearchItem  | url                     |
        | WebdriverIo | http://www.google.com   |