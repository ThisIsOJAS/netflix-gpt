# Netflix-GPT

- Created app with Vite
- Configured Tailwind CSS
- Built Header
- Routing added
- Created Login form
- Created sign up form
- Form validation
- useRef Hooks
- Firebase Setup
- Deploying our App to Production
- Create Signup User account
- User Authentication achieved with Firebase
- Created Redux Store with userSlice
- Implemented Sign Out
- Added Update profile upon account creation
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in, redirect them to login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback in Header
- Add hardcoded files to constants.js (urls, photos, etc)
- Register at TMBD and create an app over there to get access token
- Get Data from TMBD now playing movies list API
- Custom Hook for Now Playing Movies
- Create Movie Slice
- Update store with Movies Data
- Planning for Main Container and Secondary Container
- Fetch Data for Trailer Video
- Update store with Trailer Data
- Embedded the YouTube Video and made it autoplay, mute, reducedc controls, in loop and reduced branding
- Tailwind to make Main Container as close to Netflix Design
- Build Secondary Container
- Build Movie List
- Build Movie Card
- TMDB Movie Image CDN URL
- Improved HomePage Ui with Tailwind
- Made 4 custom hooks for 4 different API fetched Movie Lists
- GPT Search Page
- GPT Search Bar
- (FEATURE) Multi-Language feature on GPT Search Page
- Integrate GPT Api

## Features

- Login/sign-up Page
- > Sign-in/sign-up form
- > Redirect to browse page

- Browse Page (after authentication)
- > Header
- > Main Movie
- > - > Trailer in background
- > - > Title and Description
- > - > - > Movies list

- Browse Page Layout
- > Main Container
- > - > Video Background
- > - > Video Title
- > Secondary Container
- > - > Movies List \* n
- > - > - > Movie Card \* n

- Netflix GPT
- > search bar
- > movie suggestions
- > - > movies list
