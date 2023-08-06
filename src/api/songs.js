import {http} from "../http";

export const GetSongsFromArtist = (id, page) => {
    return http.get(`songs/${id}?page=${page}`)
}