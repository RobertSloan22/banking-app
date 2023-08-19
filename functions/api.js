const functions = require('firebase-functions');
const express = require('express');
const customersRouter = require('./customers');
const employeesRouter = require('./employees');

const app = express();

app.use('/customers', customersRouter);
app.use('/employees', employeesRouter);

exports.api = functions.https.onRequest(app);
