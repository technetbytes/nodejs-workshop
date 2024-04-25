// Define the API URL
//const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
const apiUrl = 'http://localhost:3000/events/1/etwetwe/rq3rq55'
// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });