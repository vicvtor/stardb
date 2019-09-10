import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

ReactDom.render(<App />, document.getElementById('root'));

// fetch('https://swapi.co/api/people/1/')
//     .then(res => res.json())
//     .then(json => console.log(json));