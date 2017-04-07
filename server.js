// packages express et body-parser installés via npm
var express = require('express');
var bodyParser = require("body-parser"); 
// serveur html
var server= express();
server.listen(80);

server.use(bodyParser.urlencoded({ extended: true }));

// route GET 
server.get('/index.html', function(req, res) {
  var texte = req.param("texte"); // paramètre de nom "texte" dans index.html
  res.sendFile( __dirname  + '/index.html');
});

// route POST
server.post('/post.html', function(req, res) {
  var texte = req.body.texte; 
  console.log("saisie=" + texte); // affichage dans la console du texte saisi
});

