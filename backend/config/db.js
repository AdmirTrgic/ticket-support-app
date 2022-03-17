const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;
