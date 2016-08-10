var gse = process.env.GSE;
var gKey = process.env.GKEY;
var mongoURL = process.env.FCC_IMGHIST_DB;
var request = require('request');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var baseRequestURL = 'https://www.googleapis.com/customsearch/v1?';
// history

function insertHistory(searchTerm) {
  console.log(mongoURL);
  mongoClient.connect(mongoURL, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established');
      db.collection('history').insert( {term: searchTerm, when: new Date()} );
      db.close();
    }
  });
}

function handleHistory(callback) {
  console.log(mongoURL);
  mongoClient.connect(mongoURL, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established');
      db.collection('history').find({},{ _id:0, term:1, when:1 }).sort({when:-1}).limit(10).toArray(function(err, cb) {
        if (err) {
          callback('Error: ' + err);
        }
        callback(cb);
        db.close();
      });


      // return history;
    }
  });
}

// search api

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
      insertHistory(query);
      callback(data);
    })
};

module.exports = {
  handleHistory: handleHistory,
  handleSearch: handleSearch
};
