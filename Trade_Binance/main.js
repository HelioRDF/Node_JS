const controle = require('./controle/binanceControle');
const lucratividade = parseFloat(process.env.PROFITABILITY);
//const moedas = process.env.SYMBOL;

const moedas = ["BTCBUSD", "ETHBUSD", "BNBBUSD"];

 moedas.forEach((obj) => {
  controle.market(obj.toString());
})


//controle.wallet(moedas);
async function trade() {
  separadorPrincipal();
  const mercado = await controle.market(moedas);
  const carteira = await controle.wallet(moedas);
  const valor_venda = parseFloat(mercado.asks[0][0]);
  const lucro = valor_venda * lucratividade;
  const valor_max = 64000;
  const comprar = 1;
  const investimento = comprar * valor_venda;

  if (valor_venda < valor_max) {
    console.log('\n--------------------------------------------------');
    console.log('Preço está bom. Verificando carteira...');
    console.log('- Investimento: ' + investimento);
    console.log('- Wallet: ' + carteira);
    console.log('--------------------------------------------------');
    if (investimento <= carteira) {
      const compra = await controle.buy(moedas, comprar, investimento, false);
     }
     const venda = await controle.sellMarket(moedas, 1)
  }
  separadorPrincipal();
}

function separadorPrincipal() {
  console.log('\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n');
}


