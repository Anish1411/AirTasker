export const FetchAPI = async (path, urlObject, options = {}) => {
  const baseUrl = "http://localhost:1336/api"; 
  const url = new URL(`${baseUrl}${path}`);

  Object.keys(urlObject).forEach((key) => {
    url.searchParams.append(key, JSON.stringify(urlObject[key]));
  });

  console.log(url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
