var express = require('express');
var app = express();
var search = require('./app/search');
var port = process.env.PORT || 8080;
var handleSearch = search.handleSearch;
var handleHistory = search.handleHistory;

app.get('/imagesearch/:search', function(req, res) {
   console.log('search ' + req.params.search + ' with offset=' + req.query.offset);
   handleSearch(req.params.search, req.query.offset, function(result) {
      res.send(JSON.stringify(result));
   })
});

app.get('/history/imagesearch/', function(req, res) {
  handleHistory(function(result) {
    res.send(JSON.stringify(result));
  });
});

app.listen(port, function() {
   console.log('Now listening on port ' + port);
});
