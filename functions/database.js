const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/badbank';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

module.exports = mongoose;
