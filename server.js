const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    logger.info({
        message: 'Request received',
        method: req.method,
        url: req.url,
        ip: req.ip,
        headers: req.headers
    });
    next();
});

// Function to validate input
function validateNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input: num1 and num2 must be numbers.";
    }
    return null;
}

// Function to log arithmetic operations
function logOperation(operation, num1, num2, result) {
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
        result
    });
}

// Addition endpoint
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) {
        logger.error(error);
        return res.status(400).json({ error });
    }
    const result = num1 + num2;
    logOperation('addition', num1, num2, result);
    res.json({ result });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) {
        logger.error(error);
        return res.status(400).json({ error });
    }
    const result = num1 - num2;
    logOperation('subtraction', num1, num2, result);
    res.json({ result });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) {
        logger.error(error);
        return res.status(400).json({ error });
    }
    const result = num1 * num2;
    logOperation('multiplication', num1, num2, result);
    res.json({ result });
});

// Division endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const error = validateNumbers(num1, num2);
    if (error) {
        logger.error(error);
        return res.status(400).json({ error });
    }
    if (num2 === 0) {
        const divideByZeroError = "Cannot divide by zero.";
        logger.error(divideByZeroError);
        return res.status(400).json({ error: divideByZeroError });
    }
    const result = num1 / num2;
    logOperation('division', num1, num2, result);
    res.json({ result });
});

// Error handling for unknown routes
app.use((req, res) => {
    const errorMsg = "Endpoint not found.";
    logger.error(errorMsg);
    res.status(404).json({ error: errorMsg });
});

// Start the server
app.listen(port, () => {
    logger.info(`Arithmetic microservice running at http://localhost:${port}`);
    console.log(`Arithmetic microservice running at http://localhost:${port}`);
});
