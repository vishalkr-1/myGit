import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import "./App.css";
import ScheduleMeeting from "./component/ScheduleMeeting";
function App() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/search")
      .then((res) => res.json())
      .then((data) => setMeetings(data));
  }, [meetings]);

  const formatTime = (timeUTC) => {
    const localTime = moment.tz(timeUTC, moment.tz.guess());
    return localTime.format("MMMM Do YYYY, h:mm a z");
  };

  return (
    <div className="App">
      <ScheduleMeeting />
      <h1>Meetings</h1>
      {meetings.length === 0 ? (
        <p>No meetings scheduled.</p>
      ) : (
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting._id}>
              <strong>{meeting.title}</strong> - {formatTime(meeting.timeUTC)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
