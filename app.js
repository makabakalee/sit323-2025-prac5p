const express = require('express');
const app = express();
const port = 3000;

// Unified error handling function
function handleError(res, message) {
    return res.status(400).json({ error: message });
}

// Parameter verification function
function validateParams(req, res, singleParam = false) {
    const { num1, num2 } = req.query;

    if (singleParam) {
        if (num1 === undefined) {
            return handleError(res, 'Missing parameter: num1');
        }
        const n1 = parseFloat(num1);
        if (isNaN(n1)) {
            return handleError(res, 'Invalid parameter: num1 must be a number.');
        }
        return { n1 };
    } else {
        if (num1 === undefined || num2 === undefined) {
            return handleError(res, 'Missing parameter: num1 or num2');
        }
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            return handleError(res, 'Invalid parameters: num1 and num2 must be numbers.');
        }
        return { n1, n2 };
    }
}


// Addition
app.get('/add', (req, res) => {
    const params = validateParams(req, res);
    if (!params.n1 && params.n1 !== 0) return;
    res.json({ result: params.n1 + params.n2 });
});

// Subduction
app.get('/subtract', (req, res) => {
    const params = validateParams(req, res);
    if (!params.n1 && params.n1 !== 0) return;
    res.json({ result: params.n1 - params.n2 });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const params = validateParams(req, res);
    if (!params.n1 && params.n1 !== 0) return;
    res.json({ result: params.n1 * params.n2 });
});

// Divisio
app.get('/divide', (req, res) => {
    const params = validateParams(req, res);
    if (!params.n1 && params.n1 !== 0) return;
    if (params.n2 === 0) {
        return handleError(res, 'Invalid divisor: num2 cannot be zero.');
    }
    res.json({ result: params.n1 / params.n2 });
});

// Exponential operation
app.get('/power', (req, res) => {
    const params = validateParams(req, res);
    if (!params.n1 && params.n1 !== 0) return;
    res.json({ result: Math.pow(params.n1, params.n2) });
});

// Square root operation
app.get('/sqrt', (req, res) => {
    const params = validateParams(req, res, true);
    if (!params.n1 && params.n1 !== 0) return;
    if (params.n1 < 0) {
        return handleError(res, 'Invalid parameter: num1 cannot be negative.');
    }
    res.json({ result: Math.sqrt(params.n1) });
});


// Modulo operation
app.get('/mod', (req, res) => {
    const params = validateParams(req, res);
    if (!params.n1 && params.n1 !== 0) return;
    if (params.n2 === 0) {
        return handleError(res, 'Invalid divisor: num2 cannot be zero.');
    }
    res.json({ result: params.n1 % params.n2 });
});

// Global unknown routing processing
app.use((req, res) => {
    res.status(404).json({ error: 'Invalid request path, please check the interface address' });
});

// Start the server
app.listen(port, () => {
    console.log(`The Enhanced Calculator microservice runs on http://localhost:${port}`);
});