# FCC-IMAGE-SEARCH-ABSTRACTION-lAYER

## Install
In order to use this project, you must install Node.js and Express.js You can acquire
node through the [Node.js](https://nodejs.org/en/) website. After you have it, you can
install the rest of the dependencies with this command:
`npm install`

## How to Use
In order to run this program, you can use this command to start the server on localhost:8080:
```
npm start

```

## Note
This project requires the use of a Google API with a custom google search engine and a deployed mLab database.

## Project Description:
This is one of FreeCodeCamp's API Projects, viewable [here](https://www.freecodecamp.com/challenges/image-search-abstraction-layer).
This is a microservice that queries a Google Image API and returns simply formatted JSON.

### Requirements
1. **User Story:** I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. **User Story:** I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. **User Story:** I can get a list of the most recently submitted search strings.

### Technologies used:
+ Node
+ Express
+ Google API
+ Google Custom Search Engine
+ MongoDB
+ Heroku

### Live Demo
https://stancheta-image-search.herokuapp.com/imagesearch/lolcats?offset=10
