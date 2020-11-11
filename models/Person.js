const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String], required: true },
  hunger: { type: String, default: "is hungry" },
});

module.exports = Person = mongoose.model("Person", PersonSchema);
