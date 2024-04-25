const apiUrl = 'http://localhost:3000/events/1'

const requestOptions = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  }
};

fetch(apiUrl, requestOptions)
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