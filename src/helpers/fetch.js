

const baseUrl = "http://localhost:4000/api";


const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token");
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: { token: token },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        token: token,
        email: data.email,
        surname: data.username,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.highestBid),
    });
  }
};

export { fetchSinToken, fetchConToken };
