let totalApp = 0;
let isMultipleRequisito = false;

function validarMotorPrecios(response, productsObject) {

    totalApp = response.total;
    isMultipleRequisito = productsObject.isMultipleRequisito;
    //Validar si existe promocion
    if (productsObject.isDiferentBeneficio) {

        const requireProductList = productsObject.products.filter(productTemp => productTemp.isBeneficio == false);
        const productListBeneficio = productsObject.products.filter(productTemp => productTemp.isBeneficio == true);

        const ProductsMap = new Map(response.order[0].products.map(p => [p.productId, p]));
        const requireProductListtemp = encontrarProductosEnMap(requireProductList, ProductsMap);
        const totalSinPromo = calcularTotalSinPromocion(requireProductListtemp, requireProductList);

        console.log("totalSinPromo :", totalSinPromo);


        const beneficioProductListtemp = encontrarProductosEnMap(productListBeneficio, ProductsMap);
        //console.log("beneficioProductListtemp: ", beneficioProductListtemp);

        let { subtotalCalculadoPerPromotion, subtotalConDescuentoManual, taxesCalculadosPerPromotion, totalManual, descuentoTotal, descuentoPerProductoList } = validatePromotions(response.promotions, beneficioProductListtemp, productListBeneficio);
        totalManual = totalManual + totalSinPromo;
        console.log("Total descuento manual :", descuentoTotal);
        console.log("Total CalculadoManual con promocion :", totalManual);
        console.log(`Total calculado en APP: ${totalApp}`);

        return {
            subtotalCalculadoPerPromotion,
            subtotalConDescuentoManual,
            taxesCalculadosPerPromotion,
            totalManual,
            descuentoTotal,
            descuentoPerProductoList
        };


    } else {
        if (response.promotions && response.promotions.length > 0) {
            const { subtotalCalculadoPerPromotion, subtotalConDescuentoManual, taxesCalculadosPerPromotion, totalManual, descuentoTotal, descuentoPerProductoList } = validatePromotions(response.promotions, response.order[0].products, productsObject.products);
            console.log("Total descuento manual :", descuentoTotal);
            console.log(`Subtotal calculado manual: ${subtotalCalculadoPerPromotion}`);
            console.log(`Subtotal Con Descuento calculado manual: ${subtotalConDescuentoManual}`);
            console.log(`Total taxes manual: ${taxesCalculadosPerPromotion}`);
            console.log(`Total calculado manual: ${totalManual}`);
            console.log(`Total calculado en APP: ${totalApp}`);

            return {
                subtotalCalculadoPerPromotion,
                subtotalConDescuentoManual,
                taxesCalculadosPerPromotion,
                totalManual,
                descuentoTotal,
                descuentoPerProductoList
            };

        } else {
            const totalCalculadoManual = calcularTotalSinPromocion(response.order[0].products, productsObject.products);
            console.log("totalCalculadoManual :", totalCalculadoManual);
            console.log("Total en la app: ", totalApp);
            
            return {
                subtotalCalculadoPerPromotion: totalCalculadoManual,
                subtotalConDescuentoManual: totalCalculadoManual,
                taxesCalculadosPerPromotion: 0,
                totalManual: totalCalculadoManual,
                descuentoTotal: 0,
                descuentoPerProductoList: []
            };
        }
    }

    console.log("----------------------------------------------------------------------------------\n");

}

function encontrarProductosEnMap(arrayProductos, mapProductos) {
    // Iteramos sobre cada producto del array
    return arrayProductos.map(producto => {
        // Buscamos el producto correspondiente en el map por su ID
        const productoEnMap = mapProductos.get(producto.fkProductId);
        return productoEnMap;
    });
}

function validatePromotions(promotions, productsFromResponse, products) {

    // SKUS Y SEGMENTOS IGUALES
    const resultPromotions = agruparProductos(promotions, productsFromResponse, products);
    return resultPromotions;
    //sKUS a segmentos diferentes

}

function agruparProductos(promotions, productsFromResponse, products) {
    let promotionsProducts = obtenerProductos_rel_promociones(promotions, products);
    //console.log("promotionsProducts", promotionsProducts);
    promotionsProducts = agregarDatosProductosRelacionados(promotionsProducts, productsFromResponse);
    let promotionsProductsMap = agruparProductosPorPromocion(promotionsProducts);
    const resultPromotions = calcularPromocion(promotionsProductsMap);
    return resultPromotions;


}

function obtenerProductos_rel_promociones(promotions_products, products) {
    //const promotions_products = response.promotions;
    product_promotionList = [];
    promotions_products.forEach(product => {

        var productTemp = products.filter(productTemp => productTemp.fkProductId === product.productId)[0];
        //console.log("productTemp", productTemp);
        product_promotionList.push({
            productId: product.productId,
            promotionId: product.promotionId,
            promotionType: product.promotionType,
            quantity: productTemp.quantity,
            units: productTemp.units,
            unitPrice: 0,
            promotionMaxValue: product.promotionMaxValue,
            rewardValue: product.rewardValue,
            pnf: product.pnf,
            subtotal: product.subtotal,
            requiredQuantity: productTemp.requiredQuantity,
            taxes: {
                ieps1: product.ieps1,
                ieps2: product.ieps2,
                ieps3: product.ieps3,
                iva: product.iva,
                igv: product.igv,
                isc: product.isc,
                taxInternal: product.taxInternal,
                taxMunicipality: product.taxMunicipality,
                taxPercept: product.taxPercept,
                taxRent: product.taxRent,
                taxRg212: product.taxRg212,
            }
        });
    });

    return product_promotionList;

}

function agregarDatosProductosRelacionados(promotionsProducts = {}, products = {}) {

    const promotionsProductsMap = new Map(promotionsProducts.map(p => [p.productId, p]));
    const result = [];

    for (const product of products) {
        const promotionProduct = promotionsProductsMap.get(product.productId);
        if (promotionProduct) {
            promotionProduct.unitPrice = product.unitPrice;
            result.push(promotionProduct);
        }
    }

    return result;
}

function agruparProductosPorPromocion(promotionsProducts = {}) {
    const promotionsProductsMap = new Map();

    promotionsProducts.forEach(p => {
        const promotionId = p.promotionId;
        if (promotionsProductsMap.has(promotionId)) {
            // Si ya existe una entrada para este promotionId, agregamos el objeto al array
            promotionsProductsMap.get(promotionId).push(p);
        } else {
            // Si no existe una entrada, creamos una nueva con un array que contiene el objeto
            promotionsProductsMap.set(promotionId, [p]);
        }
    });

    return promotionsProductsMap;
}

function calcularPromocion(promotionsProductsMap = {}) {

    let totalManual = 0;
    let subtotalConDescuentoManual = 0;
    let subtotalCalculadoPerPromotion = 0;
    let taxesCalculadosPerPromotion = 0;
    let descuentoTotal = 0;
    let descuentoPerProductoList = [];
    promotionsProductsMap.forEach((products, promotionId) => {
        // products es un array de objetos con el mismo promotionId
        let product_promotion = {};
        console.log(`Promoción ${promotionId}:`);
        

        let productLessQuantity = {
            quantity: 0,
            requiredQuantity: 0,
        };
        if(isMultipleRequisito){
            productLessQuantity = calculoRequireQuantity_Quantity(products);
            console.log("productLessQuantity", productLessQuantity);
        }
        let subtotalConDescuentoManualPerProducto = 0;
        let descuentoPerProducto = 0;

        const subtotalCalculado = products.reduce((acc, product) => {
            return acc + product.unitPrice * product.quantity;
          }, 0);

          let quantityAllProducts = products.reduce((acc, product) => acc + product.quantity, 0);
        

        products.forEach(product => {
            //console.log(`  Producto: ${product.productId}, Precio: ${product.unitPrice}, Quantity: ${product.quantity}, Units: ${product.units}`);
            let subtotalCalculadoPerProducto = product.unitPrice * product.quantity;
            taxesCalculadosPerPromotion += sumaImpuestos(product.taxes);
            //quantityAllProducts += product.quantity;

            //Se establecen los detalles generales de la promocion
            product_promotion = {
                promotionType: product.promotionType,
                subtotalCalculado: subtotalCalculado,
                subtotalCalculadoPerProducto: subtotalCalculadoPerProducto,
                rewardValue: product.rewardValue,
                promotionMaxValue: product.promotionMaxValue,
                quantityAllProducts : quantityAllProducts,
                quantity: isMultipleRequisito ? productLessQuantity.quantity : product.quantity,
                requiredQuantity: isMultipleRequisito ? productLessQuantity.requiredQuantity : product.requiredQuantity,
                quantityProducts: products.length
            }
            
            let {priceWithDisccount, discount}  = calcularPrecioCondescuento(product_promotion);
            subtotalConDescuentoManualPerProducto += priceWithDisccount;
            descuentoPerProducto += discount;
            descuentoPerProductoList.push({
                productId: product.productId,
                discount: discount,
                priceWithDisccount: priceWithDisccount
            });

        });
        
        
        subtotalConDescuentoManual += subtotalConDescuentoManualPerProducto;
        descuentoTotal += descuentoPerProducto;
        totalManual += (subtotalConDescuentoManual + taxesCalculadosPerPromotion);
    });//Fin

    return {
        subtotalCalculadoPerPromotion: subtotalCalculadoPerPromotion,
        subtotalConDescuentoManual: subtotalConDescuentoManual,
        taxesCalculadosPerPromotion: taxesCalculadosPerPromotion,
        descuentoTotal: descuentoTotal,
        totalManual: totalManual,
        totalApp: totalApp,
        descuentoPerProductoList: descuentoPerProductoList
    }


}
function calculoRequireQuantity_Quantity(products = []) {
    
    const productoConMenorCantidad = products.reduce((prev, current) => 
        prev.quantity < current.quantity ? prev : current
    );
    return productoConMenorCantidad;
}


function calcularPrecioCondescuento(product_promotion = {}) {
    //console.log( "product_promotion", product_promotion );
    let discount = 0;
    let priceWithDisccount = 0;

    //Porcentaje
    if (product_promotion.promotionType == "ZA02") {
        discount = ((product_promotion.subtotalCalculado * product_promotion.rewardValue) / 100);
        discount = (discount >= product_promotion.promotionMaxValue) ? (product_promotion.promotionMaxValue / product_promotion.quantityProducts)  : discount;
        discount = isMultipleRequisito ? discount * product_promotion.quantityProducts : discount;
        priceWithDisccount = product_promotion.subtotalCalculadoPerProducto - discount;
    } else {
        //monto
        if (product_promotion.promotionType == "ZA03") {
            discount = isMultipleRequisito ? product_promotion.rewardValue * calcularVecesCumpleValorRequerido(product_promotion.quantity, product_promotion.requiredQuantity) : product_promotion.rewardValue * calcularVecesCumpleValorRequerido(product_promotion.quantityAllProducts, product_promotion.requiredQuantity);
            discount = (discount >= product_promotion.promotionMaxValue) ? (product_promotion.promotionMaxValue / product_promotion.quantityProducts) : discount / product_promotion.quantityProducts;
            discount = isMultipleRequisito ? discount * product_promotion.quantityProducts : discount;
            priceWithDisccount = product_promotion.subtotalCalculadoPerProducto - discount;
        } else {
            //regalo
            discount = 0;
            priceWithDisccount = product_promotion.subtotalCalculadoPerProducto;
        }
    }

    console.log(`Descuento: ${discount}`);
    console.log(`PriceWithDiscount: ${priceWithDisccount}`);

    return {priceWithDisccount, discount};
}

function calcularVecesCumpleValorRequerido(quantity, requiredQuantity) {
    const times = Math.floor(quantity / requiredQuantity);
    return times;

}

function sumaImpuestos(taxList = {}) {
    const taxTotal = Object.values(taxList).reduce((tax, valor) => tax + valor, 0);
    return taxTotal;
}

function agregarUnitsAPaquetes(unitsFromProduct, quantityFromProduct, cantUnidades) {

    var unitsTemp = cantUnidades / unitsFromProduct;
    var quantityPackage = quantityFromProduct + unitsTemp;

    return quantityPackage;
}

function printResult(Object, Message) {
    console.log(`${Message}: ${Object[0]}`);
}
/// fucniones para calcular precios sin promociones

function calcularTotalSinPromocion(productList = [], products = []) {

    let subtotalCalculado = 0;
    let taxesCalculados = 0;


    productList.forEach(product => {
        var quantityPackage = agregarUnitsAPaquetes(product.units, product.quantity, products.filter(productTemp => productTemp.fkProductId === product.productId)[0].units);
        subtotalCalculado += product.unitPrice * quantityPackage;
        taxesCalculados += sumaImpuestos({
            ieps1: product.ieps1,
            ieps2: product.ieps2,
            ieps3: product.ieps3,
            iva: product.iva,
            igv: product.igv,
            isc: product.isc,
            taxInternal: product.taxInternal,
            taxMunicipality: product.taxMunicipality,
            taxPercept: product.taxPercept,
            taxRent: product.taxRent,
            taxRg212: product.taxRg212,
        });
    });

    return subtotalCalculado + taxesCalculados;
}

module.exports = validarMotorPrecios;