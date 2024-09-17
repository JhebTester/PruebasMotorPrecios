const axios = require('axios');

// Define los headers directamente en un objeto
const headers = {
  "accept": "*/*",
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhMWViOTkzYS03NzVhLTRmN2QtYTllOS1kZTE2NTBjODdiZGIiLCJpc3MiOiJodHRwczovL2IyYmFkZGV2LmIyY2xvZ2luLmNvbS9kMDc1YzJmNS0yZjkwLTQ0M2UtYmY5YS00NDQzMjcwNGU1MmMvdjIuMC8iLCJleHAiOjE3MjUxNDMwMjksIm5iZiI6MTcyNTEzOTQyOSwiaWRwIjoiTG9jYWxBY2NvdW50Iiwib2lkIjoiN2I5NTQ2MWMtYTVlZi00NTNkLTg4ZTAtMmRiZDk3MjcyY2JiIiwic3ViIjoiN2I5NTQ2MWMtYTVlZi00NTNkLTg4ZTAtMmRiZDk3MjcyY2JiIiwiZ2l2ZW5fbmFtZSI6IlN0YWdpbmciLCJmYW1pbHlfbmFtZSI6IkFDRDIgTWV4IiwibmFtZSI6InVua25vd24iLCJuZXdVc2VyIjpmYWxzZSwiZXh0ZW5zaW9uX3VzZXJUeXBlIjoiZXh0ZXJuYWwiLCJlbWFpbHMiOlsic3RfbXhfYWNkMi4wQHlvcG1haWwuY29tIl0sInRmcCI6IkIyQ18xX1JPUEMiLCJhenAiOiJhMWViOTkzYS03NzVhLTRmN2QtYTllOS1kZTE2NTBjODdiZGIiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MjUxMzk0Mjl9.durZn0gfHhaUFnpicoxP6yeTO4yty69hszgEGvcGnNZKo2CrdRE84Fr6TZRbNFK5mHTU79D69nSZVQ2nNTCTAIvQ4D8QyHZzlC2HpVwvP2EWDrQVgpOTRYr_Gisb-DGTG2_dNRRsg67jmssz_N6oqIfo5vrVFfU_TbLyNYx5keZSGxwVWQIsxM3EBLk8JYuUz3ATsC_6iRwnkPvNE57qn2ARP_6_cMYLmEjbV-67TjJrwcJswTnpfJH6uX_MMlgl0bgKG8DhiDEE3ltnjaF43zrKQZIefrVeUd-gQ8sOTwrvAKfCB56bZmHnt4doLQuf9NCimDE7HhgSAMkhkIjJUg",
  "Cookie": "ASLBSA=0003e9e57aa2bd783a09b86333f9873305b5673cf671b67370a19db176b1c24bf4c1; ASLBSACORS=0003e9e57aa2bd783a09b86333f9873305b5673cf671b67370a19db176b1c24bf4c1; visid_incap_3105039=qpCiEtGOSLigVChzz+Fj3cBicGYAAAAAQUIPAAAAAADHCV76p5g1CmN1MS/zPei3; visid_incap_3105039=APHpWI1gT+SE1c25rAwQ9CeVmWYAAAAAQUIPAAAAAADBSLEutQSthlqPVDZsfsZ8; .AspNetCore.Session=CfDJ8D4WQPauP%2FBDqOG5aw70oIfleYem%2Bo5LNsDEvL7rqN%2F9DTy9FiaL5Gzc%2BXDGz9FUbFtGA%2FZw4PPu7bEiPiP%2B0g3K4GVPl8q1eAubObvryhqwfN4zuXeXIunViKQ8EGGwcsz67y8RJh6JOwXja5AXKPurwwCJhLiCxzGGPbPdL5df; ASLBSA=0003e9e57aa2bd783a09b86333f9873305b5673cf671b67370a19db176b1c24bf4c1; ASLBSACORS=0003e9e57aa2bd783a09b86333f9873305b5673cf671b67370a19db176b1c24bf4c1"
};

// Define el cuerpo de la solicitud
const data = {
  "products": [
    {
      "fkProductId": 3126,
      "quantity": 5,
      "units": 0
    },
    {
      "fkProductId": 16404,
      "quantity": 3,
      "units": 0
    }
  ]
};

// Realiza la solicitud POST con axios
axios.post('https://dn.arcacontal.com/np/Promotions/development/PromotionBeta/ReviewOrderAsync/2024-08-31/1449782/4/6', data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
