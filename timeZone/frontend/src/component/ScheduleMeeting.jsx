import React, { useState } from "react";

function ScheduleMeeting() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert the selected time to UTC before sending to the backend
    const timeUTC = new Date(time).toISOString();

    const response = await fetch("http://localhost:5000/Meeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, timeUTC }),
    });

    if (response.ok) {
      alert("Meeting scheduled successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Meeting Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Meeting Time (Local):
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Schedule Meeting</button>
    </form>
  );
}

export default ScheduleMeeting;
