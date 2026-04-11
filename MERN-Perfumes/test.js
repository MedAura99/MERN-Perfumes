const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGOAUTH_URL; // or paste string directly

mongoose.connect(uri, {
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log('Connected successfully');
  mongoose.disconnect();
})
.catch(err => {
  console.error('Connection error:', err.message);
  console.error('Full error:', err);
});