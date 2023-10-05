Feature: Show/hide event details

    Scenario: An event element is collapsed by default.
        Given user has opened the app
        When viewing the page before any interaction
        Then each event element should be in it's collapsed state

    Scenario: User can expand an event to see details.
        Given the main page is open
        When user clicks the (show details) button
        Then the event opens its expanded state

    Scenario: User can collapse an event to hide details.
        Given the user is viewing an expanded event
        When user clicks the (hide details) button
        Then the event returns to its collapsed state