const escenarios_precios_per = [
  [{ "fkProductId": 5021, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4131, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 36, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 70, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 34, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4110, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 103, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 71, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 17, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4130, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 61, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4113, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4117, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }]
];
const escenarios_precios_units_per = [
  [{ "fkProductId": 5021, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 4131, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 36, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 70, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 34, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 4110, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 103, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 71, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 17, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 4130, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 61, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 4113, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 4117, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }]
];
const escenarios_precios_varios_SKU_per = [
  [
    { "fkProductId": 5021, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 4131, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }
  ],
  [
    { "fkProductId": 36, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 70, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 34, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }
  ],
  [
    { "fkProductId": 4110, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 103, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 71, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 17, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }

  ],
  [
    { "fkProductId": 4130, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 61, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 4113, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 },
    { "fkProductId": 4117, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }
  ]
];

const escenarios_reales_per = [
  [
    { "fkProductId": 15846, "quantity": 1, "units": 0 },
  ],
  [
    { "fkProductId": 15846, "quantity": 10, "units": 0 },
    { "fkProductId": 5021, "quantity": 12, "units": 0 },
  ],
  [
    { "fkProductId": 15846, "quantity": 10, "units": 0 },
    { "fkProductId": 5021, "quantity": 12, "units": 0 },
    { "fkProductId": 70, "quantity": 7, "units": 0 },
    { "fkProductId": 89, "quantity": 5, "units": 0 }
  ],
  [
    { "fkProductId": 89, "quantity": 20, "units": 0 },
    { "fkProductId": 4191, "quantity": 8, "units": 0 },
    { "fkProductId": 30, "quantity": 10, "units": 0 },
    { "fkProductId": 13933, "quantity": 5, "units": 0 },
    { "fkProductId": 16225, "quantity": 11, "units": 0 }
  ]
]

module.exports = { escenarios_precios_per, escenarios_precios_units_per, escenarios_precios_varios_SKU_per, escenarios_reales_per };
