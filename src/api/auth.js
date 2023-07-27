import {http} from "../http";

export const SignUp = (data)=> {
    return http.post('/auth/sign-up', data )
}

export const LogIn = (data)=> {
    return http.post('/auth/login', data )
}