import qs from "qs";

export async function FetchAPI(path, urlParamsObject = {}, options = {}) {
  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject, { encode: false });
    const requestUrl = `/api${path}${queryString ? `?${queryString}` : ""}`;
    console.log("requestUrl", requestUrl);

    // Trigger API call
    const response = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_URL + requestUrl,
      mergedOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching data from API: ${error.message}`);
  }
}
