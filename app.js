var express=require('express');
var app=express();

app.set('view engine','ejs');
var path=require('path');

app.use(express.static(path.join(__dirname, 'public')));

var routes=require('./routes');
app.get('/',routes.home);

app.get('/star_wars_episode/:episode_number?',routes.movie_single);

app.get('*',routes.notFound);

app.listen(3002,function(){
    console.log('listening to the port 3002');
});