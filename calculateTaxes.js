function calculateTaxesMX(data) {
    const { FactoryNetPrice, Quantity, Discount, Tax2, Tax4, TaxPct3, TaxPct1 } = data;
    const iva = (((FactoryNetPrice * Quantity) - Discount) +
        ((Tax2 * Quantity) + (Tax4 * Quantity) +
            ((FactoryNetPrice * Quantity - Discount) * (TaxPct3 / 100)))) *
        (TaxPct1 / 100);
    const ieps1 = (Tax2 * Quantity);
    const ieps2 = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct3 / 100);
    const ieps3 = (Tax4 * Quantity);

    return { iva, ieps1, ieps2, ieps3 };
}

function calculateTaxesPER(data) {

    const { FactoryNetPrice, Quantity, Discount, Tax2, Tax4, TaxPct3, TaxPct1 } = data;
    const ISC = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)
    const IGV = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const PERCEPCION_IVA = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct3 / 100)

    return { ISC, IGV, PERCEPCION_IVA };
}

function calculateTaxesECU(data) {
    const { FactoryNetPrice, Quantity, Discount, Tax2, Tax4, TaxPct3, TaxPct1 } = data;

    const IVA = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)

    return { IVA };
}

function calculateTaxesARG(data) {

    const taxCalculationFunctionArg = {
        '1': calculateTaxesARG_Group1,
        '2': calculateTaxesARG_Group2,
        '3': calculateTaxesARG_Group3,
        '4': calculateTaxesARG_Group4,
        '5': calculateTaxesARG_Group5,
        '6': calculateTaxesARG_Group6,
        '7': calculateTaxesARG_Group7,
        '8': calculateTaxesARG_Group8,
        '9': calculateTaxesARG_Group9,
        '10': calculateTaxesARG_Group10,
        '11': calculateTaxesARG_Group11,
        '12': calculateTaxesARG_Group12,
        '13': calculateTaxesARG_Group13,
        '14': calculateTaxesARG_Group14,
        '15': calculateTaxesARG_Group15,
        '16': calculateTaxesARG_Group16,
        '17': calculateTaxesARG_Group17,
        '18': calculateTaxesARG_Group18,
        '19': calculateTaxesARG_Group19,
        '20': calculateTaxesARG_Group20,
        '21': calculateTaxesARG_Group21,
        '22': calculateTaxesARG_Group22,
        '23': calculateTaxesARG_Group23,
        '24': calculateTaxesARG_Group24
    };

    const taxCalculationFunction = taxCalculationFunctionArg[data.TaxGroupId];
    if (taxCalculationFunction) {
        return taxCalculationFunction(data);
    } else {
        throw new Error('Invalid TaxGroup');
    }

}

function calculateTaxesARG_Group1(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct4 } = data;
    const IVA = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = 0
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = 0

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}
function calculateTaxesARG_Group2(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = (FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 = 0

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group3(data) {

    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct4 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = 0
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = 0

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group4(data) {

    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct6 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100));

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}
function calculateTaxesARG_Group5(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = 0

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group6(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct4, TaxPct6 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = 0
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100))

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group7(data) {

    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct6 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100))

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group8(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = (FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 = 0

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group9(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100))

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group10(data) {

    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100))

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group11(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = 0
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = 0
    const RG212 = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100))
    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group12(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = ((((FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = (FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 = 0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group13(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA = ((FactoryNetPrice - Discount) * (TaxPct1 / 100)) * Quantity
    const IMPUESTOS_INTERNOS = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS = 0
    const MUNICIPAL = ((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA = (FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 = 0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group14(data) {
    const   { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	(FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 =	0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group15(data) {

    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	0
    const RG212 =	( (( (FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100) )
    
    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group16(data) {

    const   { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	((( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	0
    const RG212 =	( (( (FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100) )

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group17(data) {
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	((( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	0
    const RG212 =	0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group18(data){
    
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	((( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100))
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	0
    const RG212 =	0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group19(data){
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	(FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 =	0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group20(data){
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;  
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	0
    const RG212 =	0;

    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };   
}

function calculateTaxesARG_Group21(data){
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	0
    const RG212 =	( (( (FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100) )
    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group22(data){
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct4 / 100)
    const PERCEPCION_IVA =	(FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 =	0
    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}
function calculateTaxesARG_Group23(data){
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	(( (FactoryNetPrice * Quantity) - Discount) * (TaxPct3 / 100))
    const MUNICIPAL =	0
    const PERCEPCION_IVA =(FactoryNetPrice * Quantity) >= 2000 ? ((FactoryNetPrice * Quantity) - Discount) * (TaxPct5 / 100) : 0
    const RG212 =	0
    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

function calculateTaxesARG_Group24(data){
    const { FactoryNetPrice, Quantity, Discount, TaxPct1, TaxPct2, TaxPct3, TaxPct4, TaxPct5 } = data;
    const IVA =	( (FactoryNetPrice - Discount) * (TaxPct1 / 100) ) * Quantity
    const IMPUESTOS_INTERNOS =	((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100)
    const RENTAS =	( (( (FactoryNetPrice * Quantity) - Discount) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (( (FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct3 / 100) )
    const MUNICIPAL =	0
    const PERCEPCION_IVA =0
    const RG212 =	( (( (FactoryNetPrice * Quantity) - Discount) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct1 / 100)) + (((FactoryNetPrice * Quantity) - Discount) * (TaxPct2 / 100))) * (TaxPct6 / 100) )
    return { IVA, IMPUESTOS_INTERNOS, RENTAS, MUNICIPAL, PERCEPCION_IVA, RG212 };
}

module.exports = {
    calculateTaxesMX,
    calculateTaxesPER,
    calculateTaxesECU,
    calculateTaxesARG
};