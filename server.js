var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/imagesearch/:search', function(req, res) {
   console.log('search ' + req.params.search + ' with offset=' + req.query.offset);
   res.send(req.params.search);
});

app.listen(port, function() {
   console.log('Now listening on port ' + port);
});
