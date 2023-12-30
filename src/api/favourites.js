import {http, httpUtils} from "../http";

export const AddToFavourites = (data) => {
    return http.post("/favourites", data)
}

export const getFavourites = () => {
    return http.get(`/favourites`, {
        headers: {
            ...httpUtils.getAuthorizationHeaders()
        }
    })
}

export const RemoveFavourite = (songId)=> {
    return http.delete(`/favourites/${songId}`)
}
