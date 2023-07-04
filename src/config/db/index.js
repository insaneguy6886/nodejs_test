const mongoose = require("mongoose");

const db = {};

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully !!!");
  } catch (error) {
    console.log("Connect failure !!!");
  }
}

module.exports = { connect };
