const escenarios_precios_per = [
  {
    isDiferentBeneficio: false,
    isMultipleRequisito : false,
    countryId:2,
    products: [
      { "fkProductId": 4191, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 5, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false },
      { "fkProductId": 16, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ]
  },
  {
    isDiferentBeneficio: false,
    isMultipleRequisito : false,
    countryId:2,
    products: [
      { "fkProductId": 5, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ]
  },
  {
    isDiferentBeneficio: false,
    isMultipleRequisito : false,
    countryId:2,
    products: [
      { "fkProductId": 16, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ]
  },
  {
    isDiferentBeneficio: false,
    isMultipleRequisito : false,
    countryId:2,
    products: [
      { "fkProductId": 12394, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ]
  },
  {
    isDiferentBeneficio: false,
    isMultipleRequisito : false,
    countryId:2,
    products: [
      { "fkProductId": 4122, "quantity": Math.floor(Math.random()*20) +1, "units": 0, "requiredQuantity": 1, "isBeneficio": false }
    ]
  }
];


module.exports = { escenarios_precios_per };
