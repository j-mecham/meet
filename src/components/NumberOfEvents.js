// src/components/NumberOfEvents.js

import { useState, useEffect } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    let errorText;
    if (isNaN(value) || value <= 0 || value > 50 ) {
      errorText = "Please make sure you input a number between 1 and 50"
    } else {
      errorText = ""
      setCurrentNOE(value);
    }

    setErrorAlert(errorText);

    // setSuggestions(filteredLocations);

    // let infoText;
    // if (filteredLocations.length === 0) {
    //   infoText = "We can not find the city you are looking for. Please try another city"
    // } else {
    //   infoText = ""
    // }
    // setInfoAlert(infoText);
  };
  
    return (
      <div id="number-of-events">
        <label htmlFor="number-of-events-input">Number of Events: </label>
        <input
          id="number-of-events-input"
          className="number-of-events-input"
          type="text"
          defaultValue="32"
          onChange={handleInputChanged}
        />
      </div>
    );
  };

  export default NumberOfEvents;