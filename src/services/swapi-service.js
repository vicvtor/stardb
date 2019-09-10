export default class SwapiService {
    _apiBase = 'https://swapi.co/api/';

    async getResource(path){
        const response = await fetch(this._apiBase + path);
        const body = await response.json();
        return body;
    }

    async getPlanet(id){
        return this.getResource(`planets/${id}`);
    }

}