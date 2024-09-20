const sql = require('mssql');
const { calculateTaxesMX, calculateTaxesECU, calculateTaxesPER, calculateTaxesARG } = require('./calculateTaxes');

// Configura la conexión a tu base de datos
const config = {
    user: 'usrDeveloper',
    password: 'pWd3V3l0P3r',
    server: 'sqls-dn-dev-eus2.database.windows.net',
    database: 'db-promotions-ds',
    encrypt: true,
};

async function obtenerDatosProducto(idProduct) {
    try {
        // Conecta a la base de datos
        await sql.connect(config);

        // Ejecuta la consulta SQL para obtener los datos del producto
        const result = await sql.query(`
            SELECT * FROM beta.PriceListProducts
            WHERE FkProductId = ${idProduct}
        `,);

        // Verifica si se encontró algún resultado
        if (result.recordset.length > 0) {
            return result.recordset[0]; // Devuelve el primer registro (el producto)
        } else {
            return null; // No se encontró el producto
        }
    } catch (err) {
        console.error('Error al obtener datos del producto:', err);
        return null;
    } finally {
        // Cierra la conexión a la base de datos
        sql.close();
    }
}



function calculateTaxes( data ){
    const resultadoTaxes = calculateTaxesByCountry(data);
    console.log("TaxesResult :", resultadoTaxes);
}

function calculateTaxesByCountry(productObject) {
    const taxCalculationFunctions = {
      1: calculateTaxesMX,
      2: calculateTaxesPER,
      5: calculateTaxesECU,
      4: calculateTaxesARG
    };
  
    const taxCalculationFunction = taxCalculationFunctions[productObject.CountryId];
    if (taxCalculationFunction) {
      return taxCalculationFunction(productObject);
    } else {
      throw new Error(`Unknown country ID: ${productObject.CountryId}`);
    }
  }

  module.exports = {
    obtenerDatosProducto,
    calculateTaxes,
    calculateTaxesByCountry
  };