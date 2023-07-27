import {http} from "../http";

export const GetAllArtists = () => {
    return http.get('/artists')
}

export const GetArtistSongs = (slug) => {
    return http.get(`artists/${slug}`)
}