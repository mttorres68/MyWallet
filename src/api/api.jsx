export const API_URL = "http://192.168.1.61:8000";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_POST(body, token) {
  return {
    url: API_URL + "/user/create",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/user/info",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: token,
      },
    },
  };
}
