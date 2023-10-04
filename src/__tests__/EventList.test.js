// src/__tests__/EventList.test.js

import { render, within, waitFor, screen } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";

describe('<EventList /> component', () => {
  const setup = (events=[]) => {
    render(<EventList events={events} />);
  }

 test('has an element with "list" role', () => {
  setup();
   expect(screen.getByRole("list")).toBeInTheDocument();
 });

 test('renders correct number of events', async () => {
  const allEvents = await getEvents(); 
  setup(allEvents)
  expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
});
});

describe('<EventList /> integration', () => {
  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    // const AppComponent = render(<App />);
    // const AppDOM = AppComponent.container.firstChild;
    // const EventListDOM = screen.queryByTestId("event-list");
    render(<App />);
    await waitFor(() => {
      const EventListDOM = screen.getByTestId("event-list");
      const EventListItems = within(EventListDOM).getAllByRole("listitem");
      expect(EventListItems.length).toBe(32);
    });
  });
});