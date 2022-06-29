# MongoDB Express.js Starter with React

## How To Run

1. You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide on the MongoDB site to create a free Atlas account, create your first cluster and get your Connection String to the database. 
Then, set the Atlas URI connection parameter in `server/config.env` to your Connection String:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/<database-name>?retryWrites=true&w=majority
```

2. Start the Express server:
```
cd server
npm install
npm start
```

3. Start the React app:
```
cd frontend
npm install
npm start
```
