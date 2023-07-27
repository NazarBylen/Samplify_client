import {http} from "../http";

export const AddToFavourites = (data) => {
    return http.post("/favourites", data)
}

export const GetFavourites = (userId)=> {
    return http.get(`/favourites/${userId}`)
}