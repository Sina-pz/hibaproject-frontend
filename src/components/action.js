export const addMovie = (movie) => ({
  type: "ADD_MOVIE",
  movie,
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const addActors = (actor) => ({
  type: "ADD_ACTORS",
  actor,
});

export const addCast = (actor) => ({
  type: "ADD_CAST",
  actor,
});

export const addMovieCast = (movie) => ({
  type: "ADD_MOVIE_CAST",
  movie,
});

export const addCrew = (actor) => ({
  type: "ADD_CREW",
  actor,
});

export const addGenre = (genre) => ({
  type: "ADD_GENRE",
  genre,
});

export const addSearch = (search) => ({
  type: "ADD_SEARCH",
  search,
});

export const requestAllActorsInfo = (item) => ({
    type: 'REQUEST_ALL_ACTORS_INFO',
    item,
  });
  
  export const getMostPopularMovie = (item) => ({
    type: "LOADED_MOST_POPULAR_MOVIES",
    item,
  });

  export const getMoviesInTheatres = (item) => ({
    type: "LOADED_MOVIES_IN_THEATRES",
    item,
  });

  export const getBestMovies = (item) => ({
    type: "LOADED_BEST_MOVIES",
    item,
  });

  export const getJustAdded = (item) => ({
    type: "LOADED_JUST_ADDED",
    item,
  });

  export const selectGenre = (option) => ({
    type: "SELECT-GENRE",
    option,
  });