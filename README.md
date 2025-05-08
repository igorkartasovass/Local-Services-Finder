# Local-Services-Finder Application


## Features:
- search services by current location or inputting addresses
- view service locations on interactive map 
- ability to filter services by category
- Admin panel(stretch feature)

## Tech Stack:
### Frontend:
- React, React Router, Tailwind CSS, 
 - Google Maps API

### Backend:
- Node.js, Express
- MongoDB and Mongoose
- RESTful API

### Deployment:
- Frontend: Vercel
- Backend: Railway or Render
- Database: MongoDB Atlas


## Getting Started
### close the repository
```bash
git clone git@github.com:{username}/Local-Services-Finder.git
cd Local-ServicesFinder

##backend setup 
cd server
npm install
# Create .env file with MongoDB connection string
npm run dev

##frontend setup
cd client
npm install
npm start


