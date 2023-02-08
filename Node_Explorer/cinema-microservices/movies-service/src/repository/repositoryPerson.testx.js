//repository.test.js 
const repository = require('./repository');
let testId = null; 

beforeAll(async () => {
    const movies = await repository.getAllMovies();
    testId = movies[0].titulo;
})

test('Repository GetAllMovies', async () => {
    const movies = await repository.getAllMovies();
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length).toBeGreaterThan(0);
})
