# MBTI Test

MBTI - Perspective test

##### Install lerna

```
yarn global add lerna
```

##### Install dependencies of all the packages

```
yarn
lerna bootstrap
```
##### Setup the database

The database used in this project is [mongodb](https://www.mongodb.com/). A easy to setup an environment is to use [Mongo Atlas](https://www.mongodb.com/cloud/atlas). After creating a cluster and creating a database, add the URL in the [.env](https://github.com/AdrielGS/MBTI-challenge/blob/master/packages/api/.env.example) file from the api module. Init the database by inserting the data from the [sample_data](https://github.com/AdrielGS/MBTI-challenge/tree/master/packages/api/sample_data) folder in its collections    

```
MONGODB_URI=
```
##### Setup the client connection

Add the API url to the [.env](https://github.com/AdrielGS/MBTI-challenge/blob/master/packages/client/.env.example) file. The default value is `"http://localhost:5000"`

```
API_URI=
```

### Run

In the root folder:

```
yarn dev
```

The frontend app will automatically open

