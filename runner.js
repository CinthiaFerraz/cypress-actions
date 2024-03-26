const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA2MjRiMWQzLWExMjQtNDY4My05OTU2LTY2YjY1OTI4ZDNkZS0xNzExNDg1MDUzMjE2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzIyYmZjYjgtNmM0YS00MzQ5LThhMzEtOTRjOWRiYmIzODczIiwidHlwZSI6InQifQ.YR-UkwlOAP3lR4SJHlZI3qzdwIjAFHZX8-mdhHBy48k';

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
