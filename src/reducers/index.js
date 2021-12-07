const InitialState = {
    isLoading: false,
    photos: [],
    favourites: [{
        url: 'https://via.placeholder.com/600/92c952', 
        title: 'accusamus beatae ad facilis cum similique qui sunt', 
        id: 1, 
        thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    }]
  }
  
  // Actions
  
  const reducer = (state = InitialState, action)=> {
  
      switch(action.type){
  
          case "LOADING_START": {
              return {
                  ...state,
                  isLoading: true,
              }
          }
  
          case "LOADED": {
              return {
                  ...state,
                  isLoading: false,
              }
          }
  
          case "PHOTO_ADD_TO_FAVOURITES": {
              return {
                  ...state,
                  favourites: [...state.favourites, action.data]
              }
          }
  
          case "PHOTO_REMOVE": {
  
            return {
                ...state,
                photos: state.photos.filter((item) => item.id !== action.data),
                favourites: state.favourites.filter((item) => item.id !== action.data),
            }
  
          }

          case "PHOTO_REMOVE_FROM_FAVOURITES": {
  
            return {
                ...state,
                favourites: state.favourites.filter((item) => item.id !== action.data),
            }
  
          }
  
          case "PHOTOS_UPDATE": {
  
            return {
                ...state,
                photos: action.data
            }
            
          }
  
          default: return state
      }
          
  }
  
  export default reducer