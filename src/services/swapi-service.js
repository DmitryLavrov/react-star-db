export default class SwApiService {
  _apiBase = 'https://swapi.dev/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Received ${res.status}`)
    }

    const body = await res.json()
    return body
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`)
    return res.results.map(this._transformPerson).slice(0, 5)
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`)
    return this._transformPerson(person)
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`)
    return res.results.map(this._transformPlanet).slice(0, 5)
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`)
    return res.results.map(this._transformStarship).slice(0, 5)
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`)
    return this._transformStarship(starship)
  }

  _extractId(item) {
    return item.url.match(/\/([0-9]*)\/$/)[1]
  }

  _transformPlanet = (planet) => {
    const id = this._extractId(planet)
    return {
      id,
      imageUrl: `${this._imageBase}/planets/${id}.jpg`,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    const id = this._extractId(starship)
    return {
      id,
      imageUrl: `${this._imageBase}/starships/${id}.jpg`,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    const id = this._extractId(person)
    return {
      id,
      imageUrl: `${this._imageBase}/characters/${id}.jpg`,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}
