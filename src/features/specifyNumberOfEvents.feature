Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given the main page is open
        When user has not specified a number
        Then thirtytwo events are shown by default

    Scenario: User can change the number of events displayed.
        Given the main page is open
        When a user types a number into the number of events input box
        Then that many events will be showing