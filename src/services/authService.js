export const login = async (credentials) => {
    // Simulación de un inicio de sesión
    // En un caso real, deberías hacer una solicitud a tu API
    return credentials.username === 'usuario' && credentials.password === 'contraseña';
};
