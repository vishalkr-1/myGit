# Meeting Scheduler

This application allows users to schedule meetings by inputting the meeting time in their local time zone. The time is converted to UTC on the frontend and sent to the backend, where it is stored in UTC format. This ensures consistency for all users, regardless of their location. When users view the scheduled meeting, it is displayed according to their local time zone using the `moment-timezone` library.

## Features

- **Meeting Scheduling**: Users can schedule meetings by entering the time in their local time zone.
- **Time Conversion**: The application automatically converts the local time to UTC on the frontend and stores it in the backend.
- **Meeting Display**: When retrieving meeting details, the application converts the UTC time back to the user's local time zone and displays it accordingly.

## How it Works

### 1. Frontend - Schedule a Meeting

- The user selects a meeting time using a datetime picker in their local time zone.
- The local time is converted to UTC using JavaScript (e.g., `new Date().toISOString()`).
- The UTC time is sent to the backend via a POST request.

### 2. Backend - Store in UTC

- The backend stores the meeting time in UTC for consistency across all users and time zones.

### 3. Frontend - Display Meeting Time

- When fetching meeting details, the backend sends the time in UTC.
- The frontend converts the UTC time to the user's local time zone using libraries like `moment-timezone`.
- The user views the meeting time in their local format.

## Example

### Scheduling:

User schedules a meeting for **2024-10-01 10:00 AM** in New York (Eastern Daylight Time, UTC-4).

- The frontend converts the local time to UTC:  
  `2024-10-01T14:00:00Z`
- This UTC time is stored in the backend.

### Displaying:

A user in London (UTC+1) views the meeting:

- The UTC time `2024-10-01T14:00:00Z` is converted to London local time:  
  `2024-10-01 3:00 PM`

## Dependencies

- **express**: For setting up the backend server.
- **mongoose**: For handling MongoDB database operations.
- **moment-timezone**: For handling time zone conversions.

## How to Run the Application

### 1. Install dependencies:

```bash
npm install
