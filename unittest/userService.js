const axios = require('axios');

export async function fetchUserData(userId) {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
     return response.data;
}

