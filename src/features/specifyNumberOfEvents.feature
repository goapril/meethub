Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given user hasn’t specified a number
When the user opens the event page
Then the user should see 32 events on the event list

Scenario: User can change the number of events they want to see.
Given user has specified a number
When the user change the number of events they want to see
Then the user should see the new number of events
