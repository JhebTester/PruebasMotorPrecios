const axios = require('axios');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// Simulación de localStorage en Node.js

const apiClient = axios.create({
  baseURL: 'https://dn.arcacontal.com',
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a cada solicitud
apiClient.interceptors.request.use(async (config) => {
  let token = localStorage.getItem('accessToken');
  //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0X2FyZ19hY2QyLjBAeW9wbWFpbC5jb20iLCJJZCI6IjE4OTE1ODM1IiwiVHlwZSI6IkN1c3RvbWVyIiwiTmFtZSI6IlVzdWFyaW8gUHJ1ZWJhIEFyZyBBQ0QgIiwiQXBwbGljYXRpb25JZCI6IjEiLCJDb3VudHJ5IjoiNCIsIkJ1cyI6IntcIjZcIjpbMTI2MjYxNywxNDQ5NzgyXX0iLCJCVSI6Ilt7XCJJZFwiOjYsXCJDbGllbnRJZFwiOjEyNjI2MTd9LHtcIklkXCI6NixcIkNsaWVudElkXCI6MTQ0OTc4Mn1dIiwibmJmIjoxNzI1ODMxMjg1LCJleHAiOjE3MjY0Mzc4ODUsImlhdCI6MTcyNTgzMzA4NX0.IF6TPXk4Kb-XOAHZMFRUq4356ZDujea0tl4Iahuk6ZA"
  
  if (!token || hasTokenExpired(token)) {
    token = await refreshToken();
  }
  
  
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Función para verificar si el token ha expirado
function hasTokenExpired(token) {
  const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  return (Date.now() >= payload.exp * 1000);
}

// Función para refrescar el token
async function refreshToken() {
  console.log("token desde la fn de refreshtoken",localStorage.getItem('refreshToken'));
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('https://dn.arcacontal.com/np/users/development/user/RefreshToken', {
      RefreshToken: refreshToken
    },
    {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken'),
        "Content-Type": "application/json",
      }
    }
  );

    const { access_token } = response.data;
    console.log('Token refrescado:', access_token);
    //localStorage.setItem('accessToken', access_token);
    localStorage.setItem('accessToken', "access_token");
    
    
    return access_token;
  } catch (error) {
    console.error('Error al refrescar el token:', error);
    throw error;
  }
}

module.exports = apiClient;
