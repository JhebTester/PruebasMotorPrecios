const login = require('./auth');
const getPriceData = require('./makeRequest');

async function main() {
  // Inicia sesión para obtener el token
  //await login();

  // Llama al endpoint del motor de precios
  await getPriceData();


}

main();

