const axios = require('axios');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const users = [
  {
    userName: 'st_mx_acd2.0@yopmail.com',
    password: 'ACD2.0mex',
    deviceId: '07af6fc6-9c87-4390-aa8e-66cb0d9d1986',
    countryCode: 'MX'
  },
  {
    userName: 'st_ecu_acd2.0@yopmail.com',
    password: 'ACD2.0ecu',
    deviceId: '07af6fc6-9c87-4390-aa8e-66cb0d9d1986',
    countryCode: 'ECU'
  },
  {
    userName: 'st_per_acd2.0@yopmail.com',
    password: 'ACD2.0per',
    deviceId: '07af6fc6-9c87-4390-aa8e-66cb0d9d1986',
    countryCode: 'PER'
  },
  {
    userName: 'st_arg_acd2.0@yopmail.com',
    password: 'ACD2.0arg',
    deviceId: '07af6fc6-9c87-4390-aa8e-66cb0d9d1986',
    countryCode: 'ARG'
  }
];

async function getBearerToken() {
  const data = {
    grant_type: 'client_credentials',
    client_id: 'af9516dd-1ee0-4adf-96ee-a6c64d4c18f8',
    scope: 'https://B2BADDEV.onmicrosoft.com/af9516dd-1ee0-4adf-96ee-a6c64d4c18f8/.default',
    client_secret: '1VB8Q~HGe.W1bUnMrYZQmq6Q5-4.XP3ykFVTLcvK'
  };
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  
  axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', data, { headers })
    .then(response => {
      const token = response.data.access_token; // Adapt this based on the response structure
      
      localStorage.setItem('access_Token', token);
    })
    .catch(error => {
      console.error('Error obtaining token:', error);
    });
}

async function login() {

  await getBearerToken();
  const bearerToken = localStorage.getItem('access_Token');
  console.log('Token obtained:', bearerToken);
  try {
    const response = await axios.post('https://dn.arcacontal.com/np/Users/development/User/SignInExt', users[1], {
      headers: {
        "Authorization": "Bearer " + bearerToken,
        "Content-Type": "application/json",
      }
    });

    // Guardar tokens en localStorage simulado
    const { accessToken, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    console.log('Login exitoso');
  } catch (error) {
    console.error('Error durante el login:', error);
  }
}

module.exports = login;
