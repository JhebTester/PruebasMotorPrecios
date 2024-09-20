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

async function login() {
  try {
    const response = await axios.post('https://dn.arcacontal.com/np/Users/development/User/SignInExt', users[0], {
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJhZjk1MTZkZC0xZWUwLTRhZGYtOTZlZS1hNmM2NGQ0YzE4ZjgiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZDA3NWMyZjUtMmY5MC00NDNlLWJmOWEtNDQ0MzI3MDRlNTJjL3YyLjAiLCJpYXQiOjE3MjY4MTYzNDUsIm5iZiI6MTcyNjgxNjM0NSwiZXhwIjoxNzI2ODIwMjQ1LCJhaW8iOiJBU1FBMi84WEFBQUF2Y3BxTnBuYTZDZ1BWY1lsWW5xUkFsdjd4RFIyb1pBZ0tlZ3Yrclg2cXlBPSIsImF6cCI6ImFmOTUxNmRkLTFlZTAtNGFkZi05NmVlLWE2YzY0ZDRjMThmOCIsImF6cGFjciI6IjEiLCJvaWQiOiJhMGUxMzg0OC00NTMxLTQ5NDItODdmOC0zZGMzMzc5NjdhYjkiLCJyaCI6IjAuQVIwQTljSjEwSkF2UGtTX21rUkRKd1RsTE4wV2xhX2dIdDlLbHU2bXhrMU1HUGdkQUFBLiIsInN1YiI6ImEwZTEzODQ4LTQ1MzEtNDk0Mi04N2Y4LTNkYzMzNzk2N2FiOSIsInRpZCI6ImQwNzVjMmY1LTJmOTAtNDQzZS1iZjlhLTQ0NDMyNzA0ZTUyYyIsInV0aSI6InRlX1lad2ZfNTBHNlc4U3U0eGtzQUEiLCJ2ZXIiOiIyLjAifQ.Gv8nuvI-5JajLoJDQmwRIL5UbUNgI-VlJ-9KT2qyGoKKFTUuWPWIsHRG7W7istGaOhiSHkvJZztlsMPExpkB32szu5H13BKqB4MzhgTyRXyaNxI4InjsePHZytA46mpQLCjTXabAmtGmaSVR4ZBrGgt9qnMErZv4E9c9IRBqIROy3VvW9g6-Dcx9yZAqynY2jIrOK5vlSACl_kHhLmySPF89xtvEV300IMugiiMpZrtzdlMiu_ZmdBsnvNSM_qH2nqGn7GZXctFBxT1YNiiys1vBmrlDS7n7KlTqt6VNBzwSjefWvB2oAAn7LSiPI6ATrNIzOCBryyS6qTwO5cAY8g",
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
