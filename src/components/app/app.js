import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';

export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header />
                <RandomPlanet />
            </React.Fragment>
        )}
}