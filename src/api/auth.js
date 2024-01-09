import { http, httpUtils } from "../http";

export const SignUp = (data) => {
  return http.post('/auth/sign-up', data)
}

export const LogIn = (data) => {
  return http.post('/auth/login', data)
}

export const GetUserInfo = (id) => {
  return http.get(`/auth/profile/${id}`)
}

export const ChangeUserPassword = (id, data) => {
  return http.patch(`/auth/change-password/${id}`, data)
}

export const DeleteUser = (id) => {
  return http.delete(`/auth/delete/${id}`)
}

export const refreshToken = () => {
  return http.post(`/auth/refresh-token`, {
    "refresh-token": localStorage.getItem("refresh-token")
  }, {
    headers: {
      ...httpUtils.getAuthorizationHeaders()
    }
  })
}
