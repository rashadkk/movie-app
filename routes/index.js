var movieJSON=require('../movies.json');

var movies=movieJSON.movies;

exports.home=function(request,response){
 response.render('Home',{
     title:'star_wars_movie',
     movies: movies
 })
};

exports.movie_single=function(request,response){
    var episode_number=request.params.episode_number;
    if(episode_number >=1 && episode_number <=6){
      response.render('movie_single',{
          title:movies[episode_number-1].title,
          movie:movies[episode_number-1],
          main_character:movies[episode_number-1].main_characters,
          movies:movies
      });
    }
    else{
        response.render('notFound',{
            title:'Star Wars Movies'
        });
    }
    //response.send('This is page for episode number :'+ episode_number);
};

exports.notFound=function(request,response){
   response.send('<h1>This is not the Page you are looking for!</h1>');
};