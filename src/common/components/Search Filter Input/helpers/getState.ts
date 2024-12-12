export const getState = async (query: string) => {
  // Modify the API endpoint to allow both zip_code and ste_name search
  const apiUrl = `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-united-states-of-america-zc-point@public/records?limit=20&refine=zip_code%3A${query}`;

  const options = {};

  try {
    const response = await fetch(apiUrl, options);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
