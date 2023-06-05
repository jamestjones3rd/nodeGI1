const fs = require('fs');

fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const planets = data.split(', ');

  console.log('Planets in the solar system:');
  planets.forEach((planet) => {
    console.log(planet);
  });
});