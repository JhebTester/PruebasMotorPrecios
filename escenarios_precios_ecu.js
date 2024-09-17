const escenarios_precios_ecu = [
  [{ "fkProductId": 13050, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 188, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 210, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 344, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 408, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 443, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 445, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 15369, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 15746, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 16395, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 16895, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 2283, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 2197, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }]
];
const escenarios_precios_ecu_unidades = [
  [{ "fkProductId": 120, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 188, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 210, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 344, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 408, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 443, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 445, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 15369, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 15746, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 16395, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 16895, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 2283, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 2197, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }]
];
const escenarios_precios_ecu_mix = [
  [
    { "fkProductId": 120, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }
  ],
  [
    { "fkProductId": 120, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 188, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }
  ],
  [
    { "fkProductId": 210, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 344, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 408, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }
  ],
  [
    { "fkProductId": 443, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 445, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 15369, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 15746, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 16395, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }
  ],
  [
    { "fkProductId": 16895, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 2283, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 2197, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }
  ]
]

const escenarios_skus_aleatorios_ecu = [
  [{"fkProductId": 3259, "quantity": 1, "units":0 }],

  [{ "fkProductId": 13050, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
  { "fkProductId": 11921, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
  { "fkProductId": 3176, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [
    { "fkProductId": 3318, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 3270, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 },
    { "fkProductId": 3346, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }
  ],
  [{ "fkProductId": 3449, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3255, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 12352, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3180, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3175, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3269, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3341, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3447, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3317, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3254, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3173, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3172, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3316, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3268, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3342, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3450, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3253, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3170, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 5034, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3272, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3446, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 5023, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3179, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 12350, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3315, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3267, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3448, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3151, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3149, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3314, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3265, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3338, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3444, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3251, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3335, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3274, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3273, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 11048, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3169, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 12339, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3313, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3264, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3250, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3166, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3320, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3262, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3249, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3322, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3261, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3257, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3311, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3259, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3337, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3443, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3183, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3310, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3258, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3441, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }],
  [{ "fkProductId": 3182, "quantity": Math.floor(Math.random() * 20), "units": Math.floor(Math.random() * 6) + 1 }]

]

module.exports = { escenarios_precios_ecu, escenarios_precios_ecu_unidades, escenarios_precios_ecu_mix, escenarios_skus_aleatorios_ecu };
