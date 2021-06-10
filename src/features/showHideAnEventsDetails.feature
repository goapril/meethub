Feature: Show/Hide an event's details

Scenario: An event element is collapsed by default.
Given event details are collapsed
When the user opens the app
Then the user should see a list of all the events without details

Scenario: User can expand an event to see its details.
Given the main page is open
When the user opens an event
Then the user should see more details of the event

Scenario: User can collapse an event to hide its details.
Given an event’s details is expanded
When the user clicks on the button
Then the event should be collapsed back and hide its details
