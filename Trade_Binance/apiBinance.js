const axios = require('axios');
const queryString = require('querystring');

const crypto = require('crypto');
const apiKey = process.env.API_KEY;
const apiSecret = process.env.SECRET_KEY;
const apiUrl = process.env.API_URL;

async function privateCall(path, data = {}, method = 'GET') {
    if (!apiKey || !apiSecret)
        throw new Error('Preencha corretamente sua API KEY e SECRET KEY');
    const timestamp = Date.now();
    const recvWindow = 60000;//máximo permitido, default 5000
    const signature = crypto
        .createHmac('sha256', apiSecret)
        .update(`${queryString.stringify({ ...data, timestamp, recvWindow })}`)
        .digest('hex');
    const newData = { ...data, timestamp, recvWindow, signature };
    const qs = `?${queryString.stringify(newData)}`;
    try {
        const result = await axios({
            method,
            url: `${apiUrl}${path}${qs}`,
            headers: { 'X-MBX-APIKEY': apiKey }
        });
        return result.data;
    } catch (err) {
        console.log(err);
    }
}
async function publicCall(path, data, method = 'GET', headers = {}) {
    try {
        const qs = data ? `?${queryString.stringify(data)}` : '';
        const result = await axios({
            method,
            url: `${process.env.API_URL}${path}${qs}`
        });
        return result.data;
    } catch (err) {
        console.error(err);
    }
}
async function time() {
    return publicCall('/v3/time');
}
async function depth(symbol = 'BTCBRL', limit = 5) {
    return publicCall('/v3/depth', { symbol, limit });
}
async function exchangeInfo() {
    const result = await publicCall('/v3/exchangeInfo');
    return result.symbols;
}
async function exchangeInfoSymbol(symbol) {
    const result = await publicCall('/v3/exchangeInfo?symbol=' + symbol);
    return result;
}
async function accountInfo() {
    return privateCall('/v3/account');
}
async function newOrder(symbol, quantity, price, side = 'BUY', type = 'LIMIT') {
    const data = { symbol, side, type, quantity };
    if (price) data.price = parseInt(price);
    if (type === 'LIMIT') data.timeInForce = 'GTC';
    return privateCall('/v3/order', data, 'POST');
}

async function newOrderMarket(symbol, quantity, side = 'SELL', type = 'MARKET') {
    const data = { symbol, side, type, quantity };
    return privateCall('/v3/order', data, 'POST');
}
module.exports = { time, depth, exchangeInfo, accountInfo, newOrder ,newOrderMarket}