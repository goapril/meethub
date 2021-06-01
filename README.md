# Project Name:
Achievement 4 Project Brief: Mett App
(Work-in-progress)

# Project Link:
To be advised...

# Project Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

# Key Features:
* Filter events by city
* Show/hide event details
* Specify number of events
* Use the app when offline
* Add an app shortcut to the home screen
* View a chart showing the number of upcoming events by city

# Technical Requirements:
* The app must be a React application.
* The app must be built using the TDD technique.
* The app must use the Google Calendar API and OAuth2 authentication flow.
* The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
* The app’s code must be hosted in a Git repository on GitHub.
* The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
* The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
* The app must pass Lighthouse’s PWA checklist.
* The app must work offline or in slow network conditions with the help of a service worker.
* Users may be able to install the app on desktop and add the app to their home screen on mobile.
* The app must be deployed on GitHub Pages.
* The API call must use React axios and async/await.
* The app must implement an alert system using an OOP approach to show information to the user.
* The app must make use of data visualization (recharts preferred).
* The app must be covered by tests with a coverage rate >= 90%.
* The app must be monitored using an online monitoring tool.

# User Stories and Scenarios:
FEATURE 1: FILTER EVENTS BY CITY
User story:
As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
User story:
As a user
I should be able to “show and hide an event’s details”
So that I can see and hide the details of an event

Scenario 1: An event element is collapsed by default.
Given event details are collapsed
When the user opens an event
Then the user should see the event details

Scenario 2: User can expand an event to see its details.
Given event details are collapsed
When the user opens an event
Then the user should see more details of the event

Scenario 3: User can collapse an event to hide its details.
Given user has opened an event
When the user clicks the event
Then the event should be collapsed back and hide its details

FEATURE 3: SPECIFY NUMBER OF EVENTS
User story:
As a user
I should be able to “specify the number of events I want to view in the app”
So that I can see more or fewer events in the events list at once.

Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given user hasn’t specified a number
When the user opens the event page
Then the user should see 32 events on the event list

Scenario 2: User can change the number of events they want to see.
Given user has specified a number
When the user opens the app events
Then the user should see the specified number of events on the list

FEATURE 4: USE THE APP WHEN OFFLINE
User story:
As a user
I should be able to “use the app when offline”
So that I can see the events I viewed the last time I was online.

Scenario 1: Show cached data when there’s no internet connection.
Given user has no internet connection
When the user opens the app
Then the user should see a list of events (cached) previously seen online

Scenario 2: Show error when user changes the settings (city, time range).
Given user has no internet connection
When the user opens the app and tries to change settings
Then the user should get an error message

FEATURE 5: DATA VISUALIZATION
User story:
As a user
I should be able to “see a chart showing the upcoming events in each city”
So that I know what events are organized in which city.

Scenario 1: Show a chart with the number of upcoming events in each city.
Given user searched for a city
When the user clicks the chart
Then the user should see the number of upcoming events in that searched city
