const initialState = { favoritesFilm: [] , historicFilms: []}
function toggleFavorite(state = initialState, action){
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value]
        }
      }
      return nextState || state
      case 'TOGGLE_FILMDETAIL':
      var historicFilmIndex = state.historicFilms.findIndex( item=> item.id === action.value.id)
         if(historicFilmIndex === -1){
                nextState = {...state,
                    historicFilms: [...state.historicFilms, action.value]
                    }
        
         }
     
        return nextState|state
        case 'REMOVE_HISTORIC_FILM':
          var historicFilmIndex = state.historicFilms.findIndex( item=> item.id === action.value.id)
           nextState = {...state, 
                         historicFilms: state.historicFilms.filter((item, index) => item.id !==  historicFilmIndex) 
                       }
         
          return nextState|state
       case 'RESET_HISTORIC':
           nextState = {...state, 
         historicFilms: []}
         return nextState|state
  default:
    return state
  }
}

export default toggleFavorite