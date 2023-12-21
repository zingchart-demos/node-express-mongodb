## Node/Express > MongoDB

This demo assumes that you have MongoDB installed and are running a local instance of a `test` database. If you do not, follow the steps:
1. Install MongoDB: https://www.mongodb.com/docs/manual/installation/
2. Run `mongod` in the terminal
  - If connection failed, the issue may be that `data/db` directory is not created or pointed to
    - Create `data/db` directory
    - Point to the directory and run the database `mongod --dbpath PATH_TO/data/db`  

### Usage
1. Download or clone this repo.

2. Navigate to the `MongoDB` directory from the command line and run `npm install` to install all dependencies (Express, Mongoose, ZingChart).

3. Run `node server.js` to populate the database with the included test data and to start the Express server.

4. Navigate to `localhost:3000` using your favorite browser.

5. Pat yourself on the back for a job well done!