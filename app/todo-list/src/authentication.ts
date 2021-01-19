let token;
export function getToken() {
  if (token == null) {
    token = localStorage.getItem("token");
  }
  return token;
}

export function setToken(t) {
  token = t;
  localStorage.setItem("token", t);
}

export function deleteToken() {
  token = null;
  localStorage.removeItem("token");
}
