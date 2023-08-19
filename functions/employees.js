const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();
const db = admin.firestore();
const db = require('./database');

// Get all customers and their account data
router.get('/all-customers', async (req, res) => {
  const customersRef = db.collection('customers');
  const snapshot = await customersRef.get();
  let customers = [];
  snapshot.forEach(doc => {
    customers.push(doc.data());
  });
  res.json(customers);
});

// Additional employee-specific routes can be defined here

module.exports = router;
