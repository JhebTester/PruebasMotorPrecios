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
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJhZjk1MTZkZC0xZWUwLTRhZGYtOTZlZS1hNmM2NGQ0YzE4ZjgiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZDA3NWMyZjUtMmY5MC00NDNlLWJmOWEtNDQ0MzI3MDRlNTJjL3YyLjAiLCJpYXQiOjE3MjU5OTc2MzgsIm5iZiI6MTcyNTk5NzYzOCwiZXhwIjoxNzI2MDAxNTM4LCJhaW8iOiJBU1FBMi84WEFBQUFYem4yeEFoSndTdTl0emR2Zk5RWjFyRFBlLy85TW8zeXdES2lGVG9kZGY0PSIsImF6cCI6ImFmOTUxNmRkLTFlZTAtNGFkZi05NmVlLWE2YzY0ZDRjMThmOCIsImF6cGFjciI6IjEiLCJvaWQiOiJhMGUxMzg0OC00NTMxLTQ5NDItODdmOC0zZGMzMzc5NjdhYjkiLCJyaCI6IjAuQVIwQTljSjEwSkF2UGtTX21rUkRKd1RsTE4wV2xhX2dIdDlLbHU2bXhrMU1HUGdkQUFBLiIsInN1YiI6ImEwZTEzODQ4LTQ1MzEtNDk0Mi04N2Y4LTNkYzMzNzk2N2FiOSIsInRpZCI6ImQwNzVjMmY1LTJmOTAtNDQzZS1iZjlhLTQ0NDMyNzA0ZTUyYyIsInV0aSI6ImtDemRSZy1vOTB1cEVaenlPQmVmQUEiLCJ2ZXIiOiIyLjAifQ.OxdTqO1wVjwm6T8jMQGmGymLAV1kGrS1nqCNglub7BIT9nUZMTSthTzEftnj8D943xg2ZbKlPUBWRwg-yGDdZmtQzMNPJI4h04S_DNkb_MHXce4zdf88GE5u7ks95zL50_7kwUfqrYMvRUsmEzYVCkWze367NbZD0WSe8PYMEbondXMaFZbZxksrKuWPgQuen93hgo46mqo8AJkP5kEFmk-oPfcanvmrm1XhE6An3ndUUgPymgGo-cBhbnf5ApU6kGAV1O7XrrMOPDsy95sh8f8GtBHyf1uI9tzJH77YU6uEKhX4RW31S1oVhT3DWRsqXvpkhqm-_P_3CAGG0JZBdQ",
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
