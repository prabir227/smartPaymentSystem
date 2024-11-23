const express = require('express');
const app = express();
const port = 3000;

// Endpoint to send data to the ESP32
app.get('/data', (req, res) => {
    res.json({ message: "Hello ESP32!", temperature: 25, humidity: 60 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
