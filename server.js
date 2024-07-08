const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.use(express.static('public'));

// Get data
app.get('/message', (req, res) => {
    res.json({message: 'Hello word!'})
})

// Send data
app.post('/message', (req, res) => {
    const data = req.body; 
    console.log(data); 
    res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(port, () => {
    console.log('listening on port');
})

