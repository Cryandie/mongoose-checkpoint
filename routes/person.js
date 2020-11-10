const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

//Postman Test URL : http://localhost:4000/persons/test
router.get("/test", (req, res) => {
  res.send("test is OK");
});

//Create and Save a Record of a Model: //http://localhost:4000/persons/addPerson
router.post("/addPerson", (req, res) => {
  const { name, age, favoriteFoods, hunger } = req.body;
  const newPerson = new Person({
    name,
    age,
    favoriteFoods,
    hunger,
  });
  newPerson
    .save()
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//http://localhost:4000/persons/all
router.get("/all", (req, res) => {
  Person.find()
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

module.exports = router;
