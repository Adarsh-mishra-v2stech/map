🌍 Interactive Map Integration with React & Mapbox
This project integrates an interactive map with user interactivity features using React, TypeScript, and Mapbox. Users can click on the map to add and view data related to geographic locations.

🚀 Features

1. Interactive Map Integration
   Uses a free map service (Mapbox) for rendering the map.

Implemented via a React-friendly wrapper/component.

2. Map Click Event
   Clicking on any point on the map opens a modal with a data entry form.

3. Modal Form
   Collects user inputs like:

Title

Description

Notes (or other custom fields)

Automatically includes latitude and longitude (can be shown or hidden).

4. Data Submission
   On form submission:

Reverse geocoding is performed using a third-party API to get the address.

The data (including address and coordinates) is stored.

5. Side Panel
   Displays a list of all user-submitted entries.

Each entry includes:

Location name/address

Coordinates

User-submitted details

6. State Management
   Uses a state management library such as:

Context API / Redux / Zustand (choose one as implemented)

🧩 Tech Stack
React.js

TypeScript

Mapbox GL JS

Reverse Geocoding API

State Management: Context Api
