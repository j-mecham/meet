import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h3 className="not-me">{event.summary}</h3>
      <p className="not-me">{event.created}</p>
      <p className="not-me">{event.location}</p>
      <button className="details-btn" onClick={() => {
        showDetails ? setShowDetails(false) : setShowDetails(true)
      }}>{showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h4 className="not-me">Event Details</h4>
          <p className="not-me">Description: {event.description}</p>
          <p className="not-me">Event status: {event.status}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;