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

## How to Use API
Example Usage:
```
https://stancheta-image-search.herokuapp.com/imagesearch/ducks
```
Example Usage with offset:
```
https://stancheta-image-search.herokuapp.com/imagesearch/pizza?offset=10
```
Example Return (only the first three items of 10):
```
[
{
url: "http://s0.yellowpages.com.au/61c2379e-fc29-4025-85db-b19e12285d4c/helloworld-mildura-image.jpg",
snippet: "Helloworld Mildura - Travel ...",
thumbnail: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQmOb-47RtkTuKBfFnqlbwiJCNsDZJRRMFpEvGx80KQ1RSzdDtvzYLcxY",
context: "http://www.yellowpages.com.au/vic/mildura/helloworld-mildura-13066162-listing.html"
},
{
url: "http://browningit.com/wp-content/uploads/2015/09/helloworld.gif",
snippet: "Hello world!",
thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRhZHClD1vdQlujIIZmeOCsnmjCz0OwpwzpH7zjBto_bxkbJ8e0fJem4",
context: "http://browningit.com/uncategorized/hello-world/"
},
{
url: "https://www.helloworld.com/img/global/social-thumbnail.jpg",
snippet: "... Marketing | HelloWorld",
thumbnail: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTN1ngZhMgA-c19ymfOwJc8ntVbdD-rTmVvw_aBSb04z8ezxsEBMAdMCg",
context: "http://www.helloworld.com/"
},
...
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
