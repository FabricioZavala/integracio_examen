const express = require('express');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/api/integrantes', (req, res) => {
    const integrantes = [
        "MILTON LEIBNITZ ANGAMARCA MOYA",
        "ARIANA ISABEL QUIJIJE VELEZ",
        "FABRICIO JOSUE ZAVALA REYES",
        "JONATHAN STEVEN MARIN GUERRERO"
    ];
    res.json({ integrantes });
});

// Servir la aplicación en el puerto 8080
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
