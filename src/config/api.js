const fetchApi = async (url, method, data = null) => {
  if (method === 'GET') {
    const response = await fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1${url}`, {
      method,
    });
    const json = await response.json();

    return json;
  }
  const response = await fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();

  return json;
};

export default fetchApi;
