
const escenarios_promos = [
    //Directa a 1 SKU
  [
    {
        "fkProductId": 16405,
        "quantity": 1,
        "units": 0
    }
  ],
  //Segmento 1 directo
  [
    {
        "fkProductId": 3126,
        "quantity": 1,
        "units": 0
    },
    {
        "fkProductId": 3128,
        "quantity": 1,
        "units": 0
    }
  ],
  //Multiple requisito (and)
  [
    {
        "fkProductId": 17101,
        "quantity": 1,
        "units": 0
    },
    {
        "fkProductId": 17102,
        "quantity": 1,
        "units": 0
    }
  ],
  //Multiple requisito segmento (and)
  [
    {
        "fkProductId": 3126,
        "quantity": 1,
        "units": 0
    },
    {
        "fkProductId": 3128,
        "quantity": 1,
        "units": 0
    },
    {
        "fkProductId": 3126,
        "quantity": 1,
        "units": 0
    },
    {
        "fkProductId": 3128,
        "quantity": 1,
        "units": 0
    }
  ]

];

module.exports = escenarios_promos;
