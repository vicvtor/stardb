import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends React.Component {
    constructor() {
        super();

        this.state = {
            name: null,
            rotationPeriod: null,
            diameter: null,
            population: null
        }

        this.swapiService = new SwapiService();

        this.getRandomPlanet();
    }

    getRandomPlanet(){
        this.swapiService
        .getPlanet(1)
        .then(p => {
            this.setState({
                name: p.name,
                rotationPeriod: p.rotation_period,
                diameter: p.diameter,
                population: p.population
            });
        });
    }

    render(){

        const {name, rotationPeriod, diameter, population } = this.state;

        return (
            <div className="random-planet">
                <div className="random-planet-image"></div>
                <div className="random-planet-details">
                    <div>{ name }</div>
                    <ul>
                        <li>Diameter: { diameter }</li>
                        <li>Population: { population }</li>
                        <li>Rotation period: { rotationPeriod }</li>
                    </ul>
                </div>
            </div>
        );
    }

}