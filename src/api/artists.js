import {http} from "../http";

export const GetAllArtists = () => {
    return http.get('/artists')
}