const readline = require('readline');
const { processOrder } = require('./priceCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const skusWithQuantities = [];

  while (true) {
    const sku = await new Promise(resolve => rl.question('Ingresa el SKU: ', resolve));
    if (!sku) break;

    const quantity = await new Promise(resolve => rl.question('Ingresa la cantidad: ', resolve));
    skusWithQuantities.push({ sku, quantity: parseInt(quantity, 10) });

    const addAnother = await new Promise(resolve => rl.question('¿Quieres agregar otro SKU? (1/x): ', resolve));
    if (addAnother != 1) break;
  }

  console.log('Products:', skusWithQuantities);

  const results = await processOrder(skusWithQuantities);
  console.log('Resultados:', results);
  rl.close();
}

main();
