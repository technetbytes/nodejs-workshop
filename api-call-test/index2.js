
getAllData('http://localhost:3000/events/1')

function getAllData(p){
    // Make a GET request
fetch(p)
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
}