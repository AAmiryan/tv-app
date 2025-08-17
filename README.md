# TV Application

A React-based TV streaming application with a modern dark-themed interface.

## Features Implemented

### 1. Main Menu (Left Sidebar)
- **Hover Animation**: Menu expands from left to right with smooth animation
- **Background Transition**: Opacity changes from 0 to 80% on hover
- **Profile Section**: Shows user avatar and name when expanded
- **Navigation Items**: Search, Home, TV Shows, Movies, Genres, Watch Later
- **Active State**: Home item is highlighted with blue background
- **Bottom Menu**: Language, Get Help, Exit options

### 2. Featured Video Section
- **Dynamic Content**: Shows selected movie information
- **Movie Details**: Category, Title, Release Year, MPA Rating, Duration, Description
- **Action Buttons**: Play and More Info buttons
- **Background Image**: Dynamic background based on selected movie
- **Video Player**: Background video plays after 2 seconds when movie is selected

### 3. Trending Now Section
- **Carousel View**: Horizontal scrollable carousel with Swiper.js
- **Responsive Design**: Adapts to different screen sizes (2-8 items visible)
- **Movie Selection**: Click any movie to update featured section
- **Session Storage**: Remembers last selected movie
- **Smart Sorting**: Last clicked movies appear first, then sorted by date
- **50 Item Limit**: Maximum 50 trending items displayed

### 4. Video Player Functionality
- **Background Video**: Plays in background without controls
- **2-Second Delay**: Video starts 2 seconds after movie selection
- **Auto Play**: Video automatically plays when visible
- **Loop**: Video loops continuously
- **Muted**: Video plays without sound

### 5. Data Management
- **JSON Data Source**: Loads data from `/public/data.json`
- **Session Storage**: Persists selected movie ID across page refreshes
- **Smart Sorting**: Prioritizes recently viewed movies
- **Error Handling**: Graceful error handling for data loading

## Technical Implementation

### Technologies Used
- **React 19** with TypeScript
- **Styled Components** for styling
- **Swiper.js** for carousel functionality
- **Vite** for build tooling

### Key Components
- `Menu`: Left sidebar with hover animations
- `Moves`: Main content container with video player
- `RecommendedMovie`: Featured movie display
- `TrendingNow`: Carousel of trending movies
- `VideoPlayer`: Background video player

### State Management
- Local state with React hooks
- Session storage for persistence
- Proper data flow between components

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Menu/           # Left sidebar menu
│   ├── Moves/          # Main content container
│   ├── RecommendedMovie/ # Featured movie display
│   ├── TrendingNow/    # Carousel component
│   └── VideoPlayer/    # Background video player
├── pages/
│   └── Home.tsx        # Main page component
├── types/
│   └── index.ts        # TypeScript interfaces
├── helpers/
│   └── index.ts        # Utility functions
└── constats/
    └── index.tsx       # Menu configuration
```

## Features Status

✅ **Completed:**
- Main menu with hover animations
- Featured video section with dynamic content
- Trending now carousel with 50 item limit
- Video player with 2-second delay
- Session storage for movie selection
- Smart sorting by last clicked
- Responsive design
- TypeScript implementation
- Error handling

The application is fully functional and meets all the requirements specified in the task description.
