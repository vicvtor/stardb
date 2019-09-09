fetch('https://swapi.co/api/people/1/')
    .then(res => res.json())
    .then(json => console.log(json));