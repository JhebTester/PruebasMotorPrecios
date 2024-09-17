const apiClient = require('./apiClient');
const { escenarios_precios_ecu, escenarios_precios_ecu_unidades, escenarios_precios_ecu_mix, escenarios_skus_aleatorios_ecu } = require('./escenarios_precios_ecu.js');
const { escenarios_precios_mx, escenarios_precios_skus_aleatorios_mx } = require('./escenarios_precios_mx.js');
const promosProductList = require('./escenarios_promos.js');
const validatePrecios = require('./validatePrecios.js');
const escenarios_promos_mx = require('./escenarios_promos_mx.js');
const { escenarios_precios_per, escenarios_precios_units_per, escenarios_precios_varios_SKU_per,escenarios_reales_per } = require('./escenarios_precios_per.js');
const { escenarios_precios_arg, escenarios_precios_units_arg, escenarios_precios_varios_SKU_arg, escenarios_reales_arg } = require('./escenarios_precios_arg.js');
const validarMotorPrecios = require('./validatePrecios&Promos.js');
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

const escenarios_precios_ecu_unidades_object = escenarios_precios_ecu_unidades[0];
const escenarios_precios_ecu_mix_object = escenarios_precios_ecu_mix[2];
const escenarios_precios_ecu_object = escenarios_precios_ecu[0];
const escenarios_precios_arg_object = escenarios_precios_arg[11];
const escenarios_precios_units_arg_object = escenarios_precios_units_arg[0];
const escenarios_precios_varios_SKU_object = escenarios_precios_varios_SKU_arg[2];
const escenarios_skus_aleatorios_ecu_Object = escenarios_skus_aleatorios_ecu[0];
const escenarios_reales_arg_Object = escenarios_reales_arg[3];
const escenarios_reales_per_Object = escenarios_reales_per[3];
const escenarios_skus_aleatorios_mx = escenarios_precios_skus_aleatorios_mx[1];
const escenarios_precios_mx_object = escenarios_precios_mx[0];
const escenarios_promos_mx_object = escenarios_promos_mx[2];
//2, 3, 6, 7


//const escenarios_precios_ecu_object = escenarios_precios_ecu[2];
async function getPriceData() {
    try {
        const response = await apiClient.post(urlList[0], {
            "products":
                escenarios_promos_mx_object.products
        });

        console.log('Datos del promociones:', response.data);
        console.log("-----------------------------------------------------");
        console.log('Datos de los productos:', response.data.order[0].products);
        console.log("-----------------------------------------------------");
        //validatePrecios(response.data, escenarios_promos_mx_object);
        validarMotorPrecios(response.data, escenarios_promos_mx_object);
        console.log("Request: ", JSON.stringify(escenarios_promos_mx_object));
    } catch (error) {
        console.error('Error al obtener los datos del precio:', error);
    }
}

module.exports = getPriceData;


function validatePrice(response) {
    const total = response.total;
    const subTotal = response.subTotal;
    let totalCalculated = 0;
    let subTotalCalculated = 0;


    for (var i = 0; i < response.promotions.length; i++) {

        var quantity = response.order[0].products[i].quantity;
        var unitPrice = response.order[0].products[i].unitPrice;
        let priceWithDisccount = 0;
        let pnfTotal = quantity * response.promotions[i].pnf;

        //porcentaje
        if (response.promotions[0].promotionType == "ZA02") {
            priceWithDisccount = pnfTotal - ((pnfTotal * response.promotions[i].rewardValue) / 100);
        } else {
            //monto
            if (response.promotions[0].promotionType == "ZA03") {
                priceWithDisccount = pnfTotal - response.promotions[i].rewardValue;
            } else {
                //regalo
                priceWithDisccount = pnfTotal;
            }
        }

        //validar si el precio con descuento es igual subtotal
        test('validar el subtotal', () => {
            espect(priceWithDisccount).toBe(subTotal);
        })

        //sumar todos los taxes 
        let sumTaxes = [];
        sumTaxes.push(response.promotions[i].ieps1);
        sumTaxes.push(response.promotions[i].ieps2);
        sumTaxes.push(response.promotions[i].ieps3);
        sumTaxes.push(response.promotions[i].iva);
        sumTaxes.push(response.promotions[i].igv);
        sumTaxes.push(response.promotions[i].isc);
        sumTaxes.push(response.promotions[i].taxInternal);
        sumTaxes.push(response.promotions[i].taxMunicipality);
        sumTaxes.push(response.promotions[i].taxPercept);
        sumTaxes.push(response.promotions[i].taxRent);
        sumTaxes.push(response.promotions[i].taxRg212);

        let totalTaxes = sumTaxes.reduce((a, b) => a + b, 0);
        //console.log(totalTaxes);

        subTotalCalculated += response.promotions[i].subtotal;
        totalCalculated += response.promotions[i].subtotal + totalTaxes;

    }

    console.log(`Total: ${total}`)
    console.log(`totalCalculated: ${totalCalculated}`)
    console.log(`subtotal: ${subTotal}`)
    console.log(`subTotalCalculated: ${subTotalCalculated}`)
}

//Argentina:

// 1 Directa a 1 SKU
// 2 Segmento 1 directo
// 3 Multiple requisito (and)
// 4 Multiple requisito segmento (and)
// 5 Multiple requisito sku y segmento (and)
// 6 Bonificación directa 1 SKU
// 7 Bonificacion Multiple requisito sku (and)
// 8 Bonificacion Multiple requisito segmento sku  (and)
// 9 Escalonada Simple
// 10 Escalonada Simple con multiple requisito
// 11 Escalonada Graduada
// 12 Escalonada Graduada - Multiple requisito
// 13 Escalonada Graduada - Multiple requisito 3