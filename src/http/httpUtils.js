export const getAccessToken = () => {
  let token = null;

  try {
    token = JSON.parse(localStorage.getItem("access-token"));
  } catch (error) {
    console.log(error);
  }

  return token;
};

export const getAuthorizationHeaders = () => {
  return {
    Authorization: `Bearer ${getAccessToken()}`
  }
}
