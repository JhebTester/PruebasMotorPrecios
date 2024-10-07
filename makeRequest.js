const apiClient = require('./apiClient');
const { escenarios_precios_ecu } = require('./escenarios_precios_ecu.js');
const { escenarios_precios_mx } = require('./escenarios_precios_mx.js');
const promosProductList = require('./escenarios_promos.js');
const validatePrecios = require('./validatePrecios.js');
const escenarios_promos_mx = require('./escenarios_promos_mx.js');
const { escenarios_precios_per } = require('./escenarios_precios_per.js');
const { escenarios_precios_arg, escenarios_precios_units_arg, escenarios_precios_varios_SKU_arg, escenarios_reales_arg } = require('./escenarios_precios_arg.js');
//const validarMotorPrecios = require('./validatePrecios&Promos.js');
const validarMotorPrecios = require('./validatePrecios&Promos2.js');
const { obtenerDatosProducto, calculateTaxes } = require('./db2.js');
//Argentina
//https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-08-31/1449782/4/6
//Mexico
//https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-09-04/61426/1/1
//Ecuador
//https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-09-03/266841/5/5
//Per
//https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-09-03/309744/2/4
const urlList = [
    "https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-09-06/61426/1/1",
    "https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-09-06/266841/5/5",
    "https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-09-03/309744/2/4",
    "https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-08-31/1449782/4/6"
]


const escenarios_precios_ecu_object = escenarios_precios_ecu[4];
const escenarios_precios_arg_object = escenarios_precios_arg[11];
const escenarios_precios_units_arg_object = escenarios_precios_units_arg[0];
const escenarios_precios_varios_SKU_object = escenarios_precios_varios_SKU_arg[2];
const escenarios_reales_arg_Object = escenarios_reales_arg[3];
const escenarios_precios_per_Object = escenarios_precios_per[0];
const escenarios_promos_mx_object = escenarios_promos_mx[18];
const escenarios_precios_mx_object = escenarios_precios_mx[0];
//2, 3, 6, 7



async function getPriceData() {
    try {
        const response = await apiClient.post(urlList[1], {
            "products":
                escenarios_precios_ecu_object.products
        });

        console.log('Datos del promociones:', response.data);
        console.log("-----------------------------------------------------");
        console.log('Datos de los productos:', response.data.order[0].products);
        console.log("-----------------------------------------------------");
        //validatePrecios(response.data, escenarios_precios_ecu_object);
        const { subtotalCalculadoPerPromotion,
            subtotalConDescuentoManual,
            taxesCalculadosPerPromotion,
            totalManual,
            descuentoTotal, descuentoPerProductoList } = validarMotorPrecios(response.data, escenarios_precios_ecu_object);
            //console.log("descuentoPerProductoList", descuentoPerProductoList);
        console.log("Request: ", JSON.stringify(escenarios_precios_ecu_object));

        console.log("Impuestos");
        console.log("--------------------------------------------------------------------");
        let totalCalculated = 0;
        escenarios_precios_ecu_object.products.forEach(product => {
            obtenerDatosProducto(product.fkProductId)
            .then(producto => {
                if (producto) {
                    let discount = descuentoPerProductoList.filter(productTemp => productTemp.productId === product.fkProductId)[0]?.discount || 0;
                    //console.log(producto);
                    producto.Quantity = product.quantity;
                    producto.Discount =  discount
                    producto.CountryId = escenarios_precios_ecu_object.countryId;
                    producto.TaxGroupId = 0;

                    let result = calculateTaxes(producto);
                     totalCalculated = totalCalculated + result.Total;
                    console.log("Impuestos: ", result);
                    console.log("Total calculador manual cn impuestos:", totalCalculated);

                } else {
                    console.log('Producto no encontrado');
                }
            })
            .catch(err => console.error(err));
        });
       
    } catch (error) {
        console.error('Error al obtener los datos del precio:', error);
    }
}

module.exports = getPriceData;
