const initialState = { favoritesBooks: [] }

function toggleFavorite(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoritesBooksIndex = state.favoritesBooks.findIndex(item => item.id === action.value.id)
            if(favoritesBooksIndex !== -1){
                nextState = {
                    ...state,
                    favoritesBooks: state.favoritesBooks.filter((item, index) => index !== favoritesBooksIndex) 
                }
            } else {
                nextState = {
                    ...state,
                    favoritesBooks: [...state.favoritesBooks, action.value]
                }
            }
            return nextState || state;
    
        default:
            return state;
    }
}
export default toggleFavorite