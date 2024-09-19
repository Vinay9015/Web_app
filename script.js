const url = "https://web_app.assignment.com/data"; // Replace with your desired API URL

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });