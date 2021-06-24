
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "db2"
  });

  const testSchema = new Schema({enter-field-nae: String});

  module.exports = mongoose.model("newSchema", testSchema);
  