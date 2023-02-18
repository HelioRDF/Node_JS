//repository.test.js
const { ObjectId } = require("mongodb");
require('dotenv').config();
const repository = require('./repository');
let testCityId = null;
let testCinemaId = null;
let testMovieId = null;

beforeAll(async () => {
    const cities = await repository.getAllCities();
    testCityId = cities[1]._id;
    testCinemaId = cities[1].cinemas[1]._id;

    //testMovieId = cities[1].cinemas[0].salas[0].sessoes[0].idFilme;
    testMovieId = new ObjectId('5aefc5029ce83b1eb6b89e59');

})

test('Repository getAllbase', async () => {
    const base = await repository.getAll();
    //console.log(base[1].cinemas)
    expect(base.length).toBeGreaterThan(0);
})

test('Repository getAllCities', async () => {
    const cities = await repository.getAllCities();
    //console.log(cities)
    expect(Array.isArray(cities)).toBeTruthy();
    expect(cities.length).toBeGreaterThan(0);
})
test('Repository getCinemasByCityId', async () => {
    const cinemas = await repository.getCinemasByCityId(testCityId);
    //  console.log(cinemas)
    expect(Array.isArray(cinemas)).toBeTruthy();
    expect(cinemas.length).toBeGreaterThan(0);
})

test('Repository getMoviesByCinemaId', async () => {
    const result = await repository.getMoviesByCinemaId(testCinemaId);
    // console.log(result)
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
})


test('Repository getMoviesByCityId', async () => {
    const result = await repository.getMoviesByCityId(testCityId);
    //console.log(result)
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
})

test('Repository getMovieSessionsByCityId', async () => {
    const result = await repository.getMovieSessionsByCityId(testMovieId, testCityId);

    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
})

test('Repository getMovieSessionsByCinemaId', async () => {
    const result = await repository.getMovieSessionsByCinemaId(testMovieId, testCinemaId);
    // console.log(result)
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
})

test('Repository Disconnect', async () => {
    const isDisconnected = await repository.disconnect();
    expect(isDisconnected).toBeTruthy();
})

