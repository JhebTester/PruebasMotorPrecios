// const {getProductIdBySku, closeConnection} = require('./db');

// async function calculatePrice(fkProductId, quantity, optionalPackages = 0) {
//   // Lógica para calcular el precio basado en fkProductId, cantidad y paquetes opcionales
//   const pricePerUnit = 10; // Este valor debería obtenerse de la BD según el fkProductId
//   const totalPrice = (quantity + optionalPackages) * pricePerUnit;
//   return totalPrice;
// }

//  function processOrder(skusWithQuantities) {
//   const results = [];

//   for (let { sku, quantity } of skusWithQuantities) {
//     try {
//       const fkProductId = getProductIdBySku(sku);
//       //const price = await calculatePrice(fkProductId, quantity);
//       results.push({ fkProductId, quantity });
//     } catch (error) {
//       console.error(`Error procesando SKU ${sku}:`, error.message);
//     }
//   }

//   closeConnection();

//   return results;
// }

// module.exports = { calculatePrice, processOrder };

const { getProductIdBySku, closeConnection } = require('./db');

async function calculatePrice(fkProductId, quantity, optionalPackages = 0) {
  // Lógica para calcular el precio basado en fkProductId, cantidad y paquetes opcionales
  const pricePerUnit = 10; // Este valor debería obtenerse de la BD según el fkProductId
  const totalPrice = (quantity + optionalPackages) * pricePerUnit;
  return totalPrice;
}

async function processOrder(skusWithQuantities) {
  const results = [];

  for (let { sku, quantity } of skusWithQuantities) {
    try {
      const fkProductId = await getProductIdBySku(sku);
      //const price = await calculatePrice(fkProductId, quantity);
      //results.push({ fkProductId, quantity, price });
    } catch (error) {
      console.error(`Error procesando SKU ${sku}:`, error.message);
    }
  }

  closeConnection(); // Ensure connection is closed after all processing

  return results;
}

module.exports = { calculatePrice, processOrder };