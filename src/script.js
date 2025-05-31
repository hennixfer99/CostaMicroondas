  const API =
      "https://mybusiness.googleapis.com/v4/{parent=Costa+microondas+praia+grande/*/locations/*}/reviews";
  
  
  API.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // or response.text(), response.blob(), etc.
  })
  .then(data => {
    // Process the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error("Fetch error:", error);
  });