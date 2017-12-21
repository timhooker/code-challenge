/** 
 * API for dealing with cars model
*/

function getCars() {
  return fetch('/api/v1/cars').then(res => res.json())
};

function createCar(car) {
  return fetch('/api/v1/cars', {
    method: 'post', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: true,
    body: JSON.stringify({car: car})
  }).then(res => res.json()).catch(console.log)
}

function updateCar(car) {
  return fetch(`/api/v1/car/${car.id}`, {
    method: 'put', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: true,
    body: JSON.stringify({car: car})
  }).then(res => res.json()).catch(console.log)
}

export { getCars, createCar, updateCar };