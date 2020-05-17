export const bookApiUrl = "http://localhost:3000/books";

export const httpGet = (path) => {
  return req(path);
};

export const httpPost = (path, data) => {
  return req(path, "POST", data);
};

export const httpPut = (path, data) => {
  return req(path, "PUT", data);
};

const req = async (path, method = "GET", data) => {
  const res = await fetch(bookApiUrl + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data && JSON.stringify(data),
  });
  const json = await res.json();
  return { ok: res.ok, data: json };
};
