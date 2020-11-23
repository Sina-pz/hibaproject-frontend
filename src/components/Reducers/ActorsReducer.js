
const initialState = {
    currentArtist: null,
    status: 'loading',
    error: null,
    mostPopularMovies:[],
    MoviesInTheatres:[],
    BestMovies:[],
    JustAdded:[],
    ActorsList:[],
    Genre:[],
    Search:[],
    Cast:[],
    Crew:[],
    MovieCast:[],
    itemList:[],
  };

  export default function actors(state = initialState, action) {
    switch (action.type) {
      case 'REQUEST_ALL_ACTORS_INFO': {
        return {
          ...state,
          status: 'loading',
        };
      }

      case 'ADD_ACTORS': {
        return {
          ...state,
          status: 'loaded',
          ActorsList:action.actor,
        };
      }
      case 'ADD_ITEM': {
        return {
          ...state,
          status: 'loaded',
          itemList:action.item,
        };
      }
      case 'ADD_CAST': {
        return {
          ...state,
          status: 'loaded',
          CastList:action.cast,
        };
      }

      case 'ADD_MOVIE_CAST': {
        return {
          ...state,
          status: 'loaded',
          CastList:action.cast,
        };
      }

      case 'ADD_CREW': {
        return {
          ...state,
          status: 'loaded',
          CrewList:action.crew,
        };
      }

      case 'ADD_GENRE': {
        return {
          ...state,
          status: 'loaded',
          Genre:action.genre,
        };
      }

      case 'ADD_SEARCH': {
        return {
          ...state,
          status: 'loaded',
          Search:action.search,
        };
      }

      case "LOADED_MOST_POPULAR_MOVIES":{
        return{
          ...state,
          status:'loaded',
          mostPopularMovies:action.item,
        }
      }
      case "LOADED_MOVIES_IN_THEATRES":{
        return{
          ...state,
          status:'loaded',
          MoviesInTheatres:action.item,
        }
      }
      case "LOADED_BEST_MOVIES":{
        return{
          ...state,
          status:'loaded',
          BestMovies:action.item,
        }
      }
      case "LOADED_JUST_ADDED":{
        return{
          ...state,
          status:'loaded',
          JustAdded:action.item,
        }
      }
      default: {
        return state;
      }
    }
}

