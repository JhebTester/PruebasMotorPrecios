// var Connection = require('tedious').Connection;
// let request = null;
// var config = {
//   server: 'sqls-dn-dev-eus2.database.windows.net',  //update me
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'usrDeveloper', //update me
//       password: 'pWd3V3l0P3r'  //update me
//     }
//   },
//   options: {
//     // If you are on Microsoft Azure, you need encryption:
//     encrypt: true,
//     database: 'db-promotions-ds'  //update me
//   }
// };
// var connection = new Connection(config);
// connection.on('connect', function (err) {
//   // If no error, then good to proceed.  
//   console.log("Connected");
//   //executeStatement();
// });

// connection.connect();

// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;

// function getProductIdBySku(Sku) {
//   request = new Request(`SELECT FkProductsLegacyAcdId FROM beta.Products WHERE Sku = '${Sku}';`, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   var result = "";
//   request.on('row', function (columns) {
//     columns.forEach(function (column) {
//       if (column.value === null) {
//         console.log('NULL');
//       } else {
//         result += column.value + " ";
//       }
//     });
//     console.log(result);
//     result = "";
//   });

//   request.on('done', function (rowCount, more) {
//     console.log(rowCount + ' rows returned');
//   });

//   // // Close the connection after the final event emitted by the request, after the callback passes
//   // request.on("requestCompleted", function (rowCount, more) {
//   //   connection.close();
//   // });
//   connection.execSql(request);
// }

// function closeConnection() {
//     // Close the connection after the final event emitted by the request, after the callback passes
//     request.on("requestCompleted", function (rowCount, more) {
//       connection.close();
//     });
// }



// module.exports = {getProductIdBySku, closeConnection};


const tedious = require('tedious');

var config = {
  server: 'sqls-dn-dev-eus2.database.windows.net',  //update me
  authentication: {
    type: 'default',
    options: {
      userName: 'usrDeveloper', //update me
      password: 'pWd3V3l0P3r'  //update me
    }
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: 'db-promotions-ds'  //update me
  }
};

const connection = new tedious.Connection(config);

connection.on('connect', (err) => {
  if (err) {
    console.error('Failed to connect: ', err);
  } else {
    console.log('Connected to SQL Server');
  }
});

connection.connect();

async function getProductIdBySku(sku) {
  return new Promise((resolve, reject) => {
    const request = new tedious.Request(`SELECT FkProductsLegacyAcdId FROM beta.Products WHERE Sku = '${sku}';`, (err, rowCount, rows) => {
      if (err) {
        reject(err);
      } else if (rows.length === 0) {
        //console.log(request);
        reject(new Error('SKU no encontrado'));
      } else {
        resolve(rows[0].fkProductId);
      }
    });

    //request.addParameter('Sku', tedious.TYPES.VarChar, sku);
    connection.execSql(request);
  });
}

function closeConnection() {
  connection.close();
}

module.exports = { getProductIdBySku, closeConnection };