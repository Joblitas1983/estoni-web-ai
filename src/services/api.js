const API_URL = 'https://api.ejemplo.com';

export const fetchData = async (endpoint) => {
    const response = await fetch(`${API_URL}/${endpoint}`);
    return response.json();
};
