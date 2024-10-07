
const escenarios_promos_mx = [
  // 1
  {
    isDiferentBeneficio: true,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 1493, "quantity": 13, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 2549, "quantity": 2, "units": 0, "requiredQuantity": 1, "isBeneficio": true }
    ]
  },
  // 2
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 1497, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ],
  },
  // 3
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 2068, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
    ]
  },
  // 4
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 1940, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
      
      //{ "fkProductId": 2780, "quantity": 5, "units": 0 , "requiredQuantity":1, "isBeneficio": false
    ]
  },
  // 5
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [{ "fkProductId": 2113, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 4, "isBeneficio": false }]
  },
  // 6
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [{ "fkProductId": 2189, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 4, "isBeneficio": false }],
  },
  // 7
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      {"fkProductId":827,"quantity":4,"units":0,"requiredQuantity":3,"isBeneficio":false},
      {"fkProductId":2779,"quantity":20,"units":0,"requiredQuantity":3,"isBeneficio":false},
      {"fkProductId":2780,"quantity":15,"units":0,"requiredQuantity":3,"isBeneficio":false}
    ],
  },
  // 8
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      {"fkProductId":145,"quantity":10,"units":0,"requiredQuantity":3,"isBeneficio":false},
      {"fkProductId":538,"quantity":20,"units":0,"requiredQuantity":3,"isBeneficio":false}
      //{ "fkProductId": 676, "quantity": Math.floor(Math.random()*20)+4, "units": 0 , "requiredQuantity":3 , "isBeneficio": false } 
    ],
  },
  // 9
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 1399, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 3, "isBeneficio": false },
    ],

  },
  // 10
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 1419, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
    ]
  },
  // 11
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [
      { "fkProductId": 846, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 2604, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 2605, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
    ]
  },

  // 12
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [//Caja gratis
      { "fkProductId": 552, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 554, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 557, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ],

  },
  // 13
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: true,
    countryId: 1,
    products: [
      { "fkProductId": 1935, "quantity": 6, "units": 0, "requiredQuantity": 3, "isBeneficio": false },
      { "fkProductId": 1940, "quantity": 2, "units": 0, "requiredQuantity": 2, "isBeneficio": false }
    ]
  },
  // 14
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: true,
    countryId: 1,
    products: [//Benefit: 846 -regalo
      { "fkProductId": 1951, "quantity": 6, "units": 0, "requiredQuantity": 3, "isBeneficio": false },
      { "fkProductId": 1954, "quantity": 2, "units": 0, "requiredQuantity": 2, "isBeneficio": false }
    ],

  },
  // 15
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: true,
    countryId: 1,
    products: [//Caja gratis 2714
      { "fkProductId": 535, "quantity": 2, "units": 0, "requiredQuantity": 2, "isBeneficio": false },
      { "fkProductId": 536, "quantity": 2, "units": 0, "requiredQuantity": 2, "isBeneficio": false },
      //{ "fkProductId": 538, "quantity": 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      //{ "fkProductId": 539, "quantity": 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ],
  },
  // 16

  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [//Caja gratis 2714
      { "fkProductId": 2080, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 569, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
    ]
  },

  //17 - 89
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: true,
    countryId: 1,
    products: [//Caja gratis 2714
      { "fkProductId": 1404, "quantity": 2, "units": 0, "requiredQuantity": 2, "isBeneficio": false },
      { "fkProductId": 1926, "quantity": 1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
    ]
  },
  //18 - 89
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: true,
    countryId: 1,
    products: [//Caja gratis 2714
      { "fkProductId": 1951, "quantity": 3, "units": 0, "requiredQuantity": 3, "isBeneficio": false },
      { "fkProductId": 1954, "quantity": 2, "units": 0, "requiredQuantity": 2, "isBeneficio": false },
    ]
  },
  //19 - 89
  {
    isDiferentBeneficio: false,
    isMultipleRequisito: false,
    countryId: 1,
    products: [//Caja gratis 2714
      { "fkProductId": 1940, "quantity": 3, "units": 0, "requiredQuantity": 3, "isBeneficio": false }
    ]
  }

];

//Condicionada SKU $
//Condicionada SEG %
//Condicionada SEG $
//Caja Gratis mismo SKU
//Caja Gratis dif SKU
//Caja Gratis SEG a SKU =
//Caja Gratis SEG a SKU dif
//Multiple req sku % - 13
//Multiple req sku % - 13
//Multiple req sku $ - 14
//Multiple req sku $ - 14
//Multiple req a sku dif % - 15
//Multiple req a sku dif % - 15
//Multiple req a sku dif $ - 16
//Multiple req a sku dif $ - 16
//Escalonada mismo SKU % - 17
//Escalonada mismo SKU % - 17
//Escalonada mismo SKU % - 17
//Escalonada mismo SKU $ - 18
//Escalonada mismo SKU $ - 18
//Escalonada mismo SKU $ - 18
//Escalonada graduada mismo SEG % - 19
//Escalonada graduada mismo SEG % - 19
//Escalonada graduada mismo SEG % - 19
//Escalonada graduada mismo SEG % - 19
//Escalonada graduada mismo SEG % - 19
//Escalonada graduada mismo SEG % - 19
//Escalonada graduada mismo SEG $ - 20
//Escalonada graduada mismo SEG $ - 20
//Escalonada graduada mismo SEG $ - 20
//Escalonada graduada mismo SEG $ - 20
//Escalonada graduada mismo SEG $ - 20
//Escalonada graduada mismo SEG $ - 20

module.exports = escenarios_promos_mx;
