const fetch = require('node-fetch');
const url = '';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'usuario': `${$usuario}`,
      'genero': `${$genero}`,
      'pelicula1': `${$pelicula1}`,
      'pelicula2': `${$pelicula2}`,
      'pelicula3': `${$pelicula3}`,
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
