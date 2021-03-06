var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

    
   articles = { 
    
    "article-one": {
        title : `Article One | Asr`,
        heading :`Article-One on my First web App`,
        date: 'Today,16-02-2018',
        content: `<p>This is my first article on my first web App. I just writing few sentences to experiment with my web App, just for pratice.This is my first article on my first web App.This is my first article on my first web App</p>` },
    
    "article-two": {
        title : `Article Two | Asr`,
        heading :`Article-One on my First web App`,
        date: 'Today,17-02-2018',
        content: `<p>This is my first article on my first web App. I just writing few sentences to experiment with my web App, just for pratice.This is my first article on my first web App This is my first article on my first web App</p>`}, 
    
    "article-three": {
        title : `Article Three | Asr`,
        heading :`Article-One on my First web App`,
        date: 'Today,18-02-2018',
        content: `<p>This is my first article on my first web App. I just writing few sentences to experiment with my web App, just for pratice. This is my first article on my first web App. This is my first article on my first web App</p>` }
       
   };
   
function createTemplate(data){
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;

        var htmlTemplate = `
    <html>
        
        <head>
         <link href="/ui/style.css" rel="stylesheet" />
                <title>
                         ${title}
                </title>
        </head>
            
        <body>
            
            <div class = container>
            
               <div>
                <a href = "/"> Home </a>
               </div>
             
               <h2>
                 ${heading}
               </h2>
           
               <div>
                  ${date}
               </div>
           
              <div>
                  ${content}
              </div>
           
            </div>
        
        </body>
     
    </html>`;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req, res){
// articleName == article-one
var name = req.query.name;
names.push(name);
res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req, res){
// articleName == article-one
//articles[articleName] == {} Content object for article one
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
