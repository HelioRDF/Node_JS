const redis = require('./redisClient');


test('GET name', async () => {
    const response = await redis.getValue('nome')
    expect(response).toEqual("Helio");

})

test('GET password', async () => {
    const response = await redis.getValue('password')
    expect(response).toEqual("$2a$12$J6rCil4Y5/2LV2vhiGoDjugVLx6K5soxxkbxjKby..wOtXneTWbBq");

})

test('GET movies', async () => {
    const response = await redis.getValue('/movies')
    expect(response).toEqual("http://localhost:3000/");

})
test('GET cities', async () => {
    const response = await redis.getValue('/cities')
    expect(response).toEqual("http://localhost:3001/");

})

test('GET cinemas', async () => {
    const response = await redis.getValue('/cinemas')
    expect(response).toEqual("http://localhost:3001/");

})

