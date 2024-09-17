let totalACD1 = 0;
let totalCalculated = 0;
let subTotalCalculated = 0;
let quantityGlobal = 0;
let unitList = [];
let quantityList = [];
let quantityPlusUnits = [];
let unitPriceList = [];
let priceACDList = [];
let taxesList = [];
let subtotalACD1 = 0;
let totalSumTaxes = 0;
let fkProductIdList = [];
function validatePrecios(response, products) {
    const total = response.total;
    const subTotal = response.subTotal;

    if (response.promotions && response.promotions.length > 0) {
        validatePromotions(response, products);
    } else {
        for (var i = 0; i < response.order[0].products.length; i++) {
            fkProductIdList.push(response.order[0].products[i].productId);
            var units = products[i].units;
            var unitInter = units / response.order[0].products[i].units;
            var quantity = response.order[0].products[i].quantity + unitInter;
            var unitPrice = response.order[0].products[i].unitPrice;
            let pnfTotal = quantity * unitPrice;

            totalACD1 += response.order[0].products[i].productDetail.customerPrice * quantity;
            quantityGlobal += quantity;
            subtotalACD1 += response.order[0].products[i].productDetail.listPrice * quantity;

            //listas
            unitList.push(units);
            quantityPlusUnits.push(quantity);
            quantityList.push(response.order[0].products[i].quantity);
            unitPriceList.push(unitPrice);
            priceACDList.push(response.order[0].products[i].productDetail.customerPrice);

            let sumTaxes = [];
            sumTaxes.push(response.order[0].products[i].ieps1);
            sumTaxes.push(response.order[0].products[i].ieps2);
            sumTaxes.push(response.order[0].products[i].ieps3);
            sumTaxes.push(response.order[0].products[i].iva);
            sumTaxes.push(response.order[0].products[i].igv);
            sumTaxes.push(response.order[0].products[i].isc);
            sumTaxes.push(response.order[0].products[i].taxInternal);
            sumTaxes.push(response.order[0].products[i].taxMunicipality);
            sumTaxes.push(response.order[0].products[i].taxPercept);
            sumTaxes.push(response.order[0].products[i].taxRent);
            sumTaxes.push(response.order[0].products[i].taxRg212);

            let totalTaxes = sumTaxes.reduce((a, b) => a + b, 0);
            taxesList.push(totalTaxes);
            //console.log(totalTaxes);
            totalSumTaxes += totalTaxes;

            subTotalCalculated += pnfTotal;
            totalCalculated += pnfTotal + totalTaxes;
        }


        if (totalCalculated.toFixed(0) == total.toFixed(0)) {
            console.log("Total correcto");
        } else {
            console.log("ERROR en total calculado");

        }
        if (total.toFixed(0) == totalACD1.toFixed(0)) {
            console.log("Total correcto con ACD1.0");
        } else {
            console.log("ERROR en total calculado con ACD1");
        }

        if (subTotalCalculated.toFixed(0) == subTotal.toFixed(0)) {
            console.log("Subtotal correcto");
        } else {
            console.log("ERROR en subtotal calculado");;

        }
        console.log("\n");

        console.log(`Cant. de pqts por sku: ${quantityList}`)
        console.log(`Cantidad de uns: ....  ${unitList}`)
        console.log(`Cantidad + units: ....  ${quantityPlusUnits}`)
        console.log(`Precio unitario: ....  ${unitPriceList}`)
        console.log(`Precio unitario ACD1: ....  ${priceACDList}`)
        console.log(`TaxesList: ....  ${taxesList}`)
        console.log(`TotalTaxes: ....  ${totalSumTaxes}`)


        console.log(`Cantidad de pqts: ...  ${quantityGlobal}`)
        console.log("\n");
        console.log(`Total app: ..........  ${total}`)
        console.log(`totalCalculated: ....  ${totalCalculated}`)
        console.log(`totalACD1: ..........  ${totalACD1}`)
        console.log("\n");
        console.log(`subtotal: ...........  ${subTotal}`)
        console.log(`subTotalCalculated: .  ${subTotalCalculated}`)
        console.log(`SubTotal ACD1: ......  ${subtotalACD1}`)
        console.log("---------------------------------------------------");
        console.log("\n");
    }
}

function validatePromotions(response, products) {
    const total = response.total;
    const subTotal = response.subTotal;
    let priceWithDisccountTotal = 0;
    let priceWithDisccountList = [];
    let discountList = [];
    let pnfList = [];
    let cantidadPaqtsList = [];
    let cantidadUnitsList = [];
    let cantidadPaqtsUnitList = [];
    let pnfTotalList = [];
    let subtotalesList = [];
    let rewardValueList = [];
    let totalXProductoList = [];
    let totalCalculadoManual = 0;
    let promotionTypeList = [];
    

    for (var i = 0; i < response.order[0].products.length; i++) {
        fkProductIdList.push(response.order[0].products[i].productId);
        var units = products[i].units;
        var unitInter = units / response.order[0].products[i].units;
        var quantity = response.order[0].products[i].quantity + unitInter;
        var pnf = response.order[0].products[i].unitPrice;
        let pnfTotal = quantity * pnf;
        let priceWithDisccount = 0;
        let discount = 0;

        promotionTypeList.push(response.promotions[i].promotionType == "ZA02" ? "Porcentaje" : response.promotions[i].promotionType == "ZA03" ? "Monto" : "Otro");
        //porcentaje
        if (response.promotions[0].promotionType == "ZA02") {
            discount = ((pnfTotal * response.promotions[i].rewardValue) / 100);
            discount = (discount >= response.promotions[i].promotionMaxValue) ?  response.promotions[i].promotionMaxValue : discount;
            priceWithDisccount = pnfTotal - discount;
        } else {
            //monto
            if (response.promotions[0].promotionType == "ZA03") {
                discount = response.promotions[i].rewardValue * quantity;
                discount = (discount >= response.promotions[i].promotionMaxValue) ?  response.promotions[i].promotionMaxValue : discount;
                priceWithDisccount = pnfTotal - discount;
            } else {
                //regalo
                discount = 0;
                priceWithDisccount = pnfTotal;
            }
        }

        pnfList.push(pnf);
        cantidadPaqtsList.push(response.order[0].products[i].quantity);
        cantidadUnitsList.push(units);
        cantidadPaqtsUnitList.push(quantity);
        pnfTotalList.push(pnfTotal);
        rewardValueList.push(response.promotions[i].rewardValue);
        discountList.push(discount);
        priceWithDisccountList.push(priceWithDisccount);

        

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
        taxesList.push(totalTaxes);
        priceWithDisccountTotal += priceWithDisccount; 

        totalXProductoList.push(priceWithDisccount+ totalTaxes);

        subTotalCalculated += response.promotions[i].subtotal;
        subtotalesList.push(response.promotions[i].subtotal);
        totalCalculated += response.promotions[i].subtotal + totalTaxes;
    }

    totalCalculadoManual = totalXProductoList.reduce((a, b) => a + b, 0);

    console.log(`fKProductId: ...............................  ${fkProductIdList.join(' | ')}`);
    console.log(`Tipo de descuento: .........................  ${promotionTypeList.join(' | ')}`);
    console.log(`PNFs cada SKU ..............................  ${pnfList.join(' | ')}`)
    console.log(`Cantidad de pqts ...........................  ${cantidadPaqtsList.join(' | ')}`)
    console.log(`Cantidad de units ..........................  ${cantidadUnitsList.join(' | ')}`)
    console.log(`Cantidad de paqts + units ..................  ${cantidadPaqtsUnitList.join(' | ')}`)
    console.log(`PNF Total PNF * (Units + pqts) manual.......  ${pnfTotalList.join(' | ')}`)
    console.log(`Reward Value ...............................  ${rewardValueList.join(' | ')}`)
    console.log(`Lista Descuentos: manual ...................  ${discountList.join(' | ')}`)
    console.log(`Lista precios con descuento manual:  .......  ${priceWithDisccountList.join(' + ')}`)
    console.log(`Lista Subtotales calculados: ...............  ${subtotalesList.join(' + ')}`)
    console.log("-------------------------------------------------------------------------");
    console.log(`Subtotal con el descuento manual (suma): ...  ${priceWithDisccountTotal}`)
    console.log(`Subtotal calculado: ........................  ${subTotal}`)
    console.log(`Subtotal calculado (suma): .................  ${subTotalCalculated}`)
    console.log("\n");
    console.log(`Lista de suma de taxes: ....................  ${taxesList.join(' | ')}`);
    console.log("\n");
    console.log(`Totales cada prod manual: ..................  ${totalXProductoList.join(' | ')}`)
    console.log(`Total calculo manual: ......................  ${totalCalculadoManual}`)
    console.log(`Total calculado: ...........................  ${totalCalculated}`)
    console.log(`Total app: .................................  ${total}`)
    console.log("\n");
}

module.exports = validatePrecios;