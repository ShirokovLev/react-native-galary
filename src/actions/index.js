export const startLoading = () => ({type: 'LOADING_START'})

export const stopLoading = () => ({type: 'LOADED'})

export const addPhotoToFavourites = (body) => {
    return {type: 'PHOTO_ADD_TO_FAVOURITES', data: body}
}

export const removePhotoFromFavourites = (body) => {
    return {type: 'PHOTO_REMOVE_FROM_FAVOURITES', data: body}
}

export const removePhoto = (body) => {
    return {type: 'PHOTO_REMOVE', data: body}
}

export const updatePhotos = (body) => {
    return {type: 'PHOTOS_UPDATE', data: body}
}


