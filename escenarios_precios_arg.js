const escenarios_precios_arg = [
  [{ "fkProductId": 15432, "quantity": 1, "units": 0 }],
  [{ "fkProductId": 2983, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 2984, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 13013, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 3069, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 3070, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 3072, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 15432, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 16404, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 16405, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 10909, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 6418, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 5036, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4905, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 4906, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 11325, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 3101, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 3103, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 12969, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 12970, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }],
  [{ "fkProductId": 3128, "quantity": Math.floor(Math.random() * 20) + 1, "units": 0 }]
];
const escenarios_precios_units_arg = [
  [{ "fkProductId": 2983, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 2984, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 13013, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 3069, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 3070, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 3072, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 15432, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 16404, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 16405, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 10909, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 6418, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 5036, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 4905, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 4906, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 11325, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 3101, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 3103, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 12969, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 12970, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }],
  [{ "fkProductId": 3128, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }]
];
const escenarios_precios_varios_SKU_arg = [
  [
    { "fkProductId": 3072, "quantity": 12, "units": 0 },
    { "fkProductId": 15432, "quantity": 0, "units": 0 },
    { "fkProductId": 16404, "quantity": 18, "units": 0 },
    { "fkProductId": 16405, "quantity": 9, "units": 0 }
  ],
  [
    { "fkProductId": 2983, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 2984, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
  ],
  [
    { "fkProductId": 13013, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 3069, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 3070, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }
  ],
  [
    { "fkProductId": 3072, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 15432, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 16404, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 16405, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }
  ],
  [
    { "fkProductId": 10909, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 6418, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 5036, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 4905, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 4906, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }
  ],
  [
    { "fkProductId": 11325, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 3101, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 3103, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 12969, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 12970, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 },
    { "fkProductId": 3128, "quantity": Math.floor(Math.random() * 20)+1, "units": 0 }
  ]
];



// SKU	pqts	Unit		  SKU	pqts	Unit	Monto 		SKU	pqts	Unit	Monto 		SKU	pqts	Unit	Monto 	
// 326	1	0		326	1	0	  $2,750.11		3846	3	0	$4,800.00		1421	9	0	$        24,000.96 	
//  	 	0		668	8	0	    $8,000.28		3852	6	0	$11,519.99		2781	10	0	$        39,001.42 	
//  	 	0		 	 	0	 		 	 	0	 		4766	12	0	$        40,615.77 	
//  	 	0		 	 	0	 		 	 	0	 		4767	8	0	$27,077.18	
//  	 	0		 	 	0	 		 	 	0	 		 	 	0	 	
 	 	 		 	 	 	 		 	 	 	 		 	 	 	 	
// Total	2,750.11	 		Total	$10,750.39	 	 		Total	$16,319.99	 	 		Total	$106,694.36	 	Total de Pq 39	
 	 	 		 	 	 	 		 	 	 	 		 	 	 	 	

const escenarios_reales_arg = [

  //326
  [
    { "fkProductId": 8333, "quantity": 1, "units": 0 }
  ],
  [
    { "fkProductId": 8333, "quantity": 1, "units": 0 },
    { "fkProductId": 3138, "quantity": 8, "units": 0 },
  ],
  [
    { "fkProductId": 3066, "quantity": 3, "units": 0 },
    { "fkProductId": 3070, "quantity": 6, "units": 0 }
  ],
  [
    { "fkProductId": 15245, "quantity": 9, "units": 0 },
    { "fkProductId": 13273, "quantity": 10, "units": 0 },
    { "fkProductId": 12969, "quantity": 12, "units": 0 },
    { "fkProductId": 12970, "quantity": 8, "units": 0 }
  ]
]

module.exports = { escenarios_precios_arg, escenarios_precios_units_arg, escenarios_precios_varios_SKU_arg, escenarios_reales_arg };