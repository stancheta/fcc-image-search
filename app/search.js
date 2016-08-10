var gse = process.env.GSE;
var gKey = process.env.GKEY;

var request = require('request');

var baseRequestURL = 'https://www.googleapis.com/customsearch/v1?';

function formatObject(data) {
  return {
    url: data.link,
    snippet: data.snippet,
    thumbnail: data.image.thumbnailLink,
    context: data.image.contextLink
  };
}

function formatJSON(data) {
  var response = [];
  for (var i = 0; i < data.items.length; i++) {
    response.push(formatObject(data.items[i]));
  }
  return response;
}

function getJSON(url, callback) {
  console.log(url);
  request(url, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      callback(0, formatJSON(JSON.parse(body)));
    } else {
      console.log('error');
      callback('error');
    }
  });
}

function handleSearch(query, o, callback) {
  var count = 10;
  var offset = o || 0;
  offset++;
  var requestPath = baseRequestURL + 'q=' + query + '&cx=' + gse + '&num=' +
  count + '&searchType=image&start=' + offset + '&key=' + gKey;

  getJSON(requestPath, function(err, data) {
    var response = {}
    if (err) {
      response.error = 'There was an error in the system.';
      callback(response);
    }
      callback(data);
    })
};

module.exports = {
  handleSearch: handleSearch
};
