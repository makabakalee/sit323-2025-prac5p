const express = require('express');
const app = express();
const port = 3000;

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Subduction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing parameter num1 or num2' });
    }
    const divisor = parseFloat(num2);
    if (divisor === 0) {
        return res.status(400).json({ error: 'num2 cannot be zero' });
    }
    const result = parseFloat(num1) / divisor;
    if (isNaN(result)) {
        return res.status(400).json({ error: 'The parameters num1 and num2 must be number' });
    }
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`The calculator microservice runs on: http://localhost:${port}`);
});
