const fetch = require('node-fetch');
const url = '';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'nombre': `${$nombre}`,
      'correo': `${$correo}`,
      'destino': `${$destino}`,
    })
};
try {
    const response = await fetch(url, options);
    const text = await response.text();
    return text;
} catch (error) {
    console.error(error);
    return '';
}
