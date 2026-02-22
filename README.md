# NASA APOD Explorer

A React + TypeScript web application that uses the **NASA Astronomy Picture of the Day (APOD) API** to explore space imagery.  
Built with **Material UI** for styling, it provides two interactive pages: a simple planetary viewer and a fun guessing game.

**! The api key is for demo purposes only !**

## Features

### 1. Planetary Page
- Displays a random NASA APOD image.  
- Shows the **title** and **description** of the image.  
- Click **Next** to fetch a new random image.  

### 2. Guess the Title Game
- Displays a NASA APOD image without its description.  
- Offers **3 possible titles**, only one of which is correct.  
- Users try to **guess the correct title**.  
- Provides instant feedback on whether the guess was correct.
- After guessing, description about image shows up.

## Tech Stack

- **React**
- **TypeScript**
- **Material UI (MUI)**
- **NASA APOD API**

## How to Build & Run

### 1. Clone the repo
```bash
git clone https://github.com/trakt0rs/nasa-planetary.git
cd nasa-planetary
```

### 2. Install & Run
```bash
npm install
npm run dev
```
