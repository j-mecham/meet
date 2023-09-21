# meet
## Objective
Meet is a serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events
### Key Features
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.
### User Stories\(US\)/Test Scenarios\(TS\)\(Gherkin Syntax\)
1. **US**: As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.
  - **TS**: Given the home page of a logged in user account, when a user searches for a city, then they can choose that city to only see events there.
2. **US**: As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
  - **TS**: Given an event is displayed on screen, when a user clicks a "show details" button, then the event's details will be displayed to the user.
3. **US**: As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.
  - **TS**: Given a list of events is displayed on screen, when a user selects a list size option, then they can specify how many events they want to see. 
4. **US**: As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.
  - **TS**: Given the app is being used offline, when a user wants to still see the events they previously viewed, then they may see what was availiable the last time they were online.
5. **US**: As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.
  - **TS**: Given a user has set up their account, when they want quicker access from their Home Screen, they can find an option to add a shortcut to the app.
6. **US**: As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.
  - **TS**: Given a user wants a visualization of event details, when they choose a chart option, then they can see what events are organized in each city.
### How Meet App will use Serverless functions
The Meet App will use serverless mostly in the backend, using Node/Express as Lambda functions, hosted on AWS. It will also be used in the authorization process to use OAuth with the Google Calendar API. Serverless functions will handle filtering of events and to generate charts for users to view. Using serverless will allow the app to be deployed quickly and easily and have flexible scalability for high or low traffic.

