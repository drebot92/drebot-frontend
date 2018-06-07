var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/portfolio'));

app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// var h5bp = require('h5bp');
// var app = h5bp.createServer({ root: __dirname + '/portfolio' });

// app.set('port', (process.env.PORT || 5000));

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });