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

//Model Find all  : http://localhost:4000/persons/all
router.get("/all", (req, res) => {
  Person.find()
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//Model Find One by food  :  http://localhost:4000/persons/:favoriteFoods
router.get("/:favoriteFoods", (req, res) => {
  const { favoriteFoods } = req.params;
  Person.findOne({ favoriteFoods })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//Model Find by _id  :  http://localhost:4000/persons/all/:_id
router.get("/all/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findOne({ _id })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//Model Update by _id     :  http://localhost:4000/persons/editFood/:_id
router.put("/editFood/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findOneAndUpdate({ _id }, { $set: req.body }, { new: true })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//Model update by name : http://localhost:4000/persons/editAge/:name
router.put("/editAge/:name", (req, res) => {
  const { name } = req.params;
  Person.findOneAndUpdate({ name }, { $set: req.body }, { new: true })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//Model Find by _id and remove :  http://localhost:4000/persons/remove/:_id
router.delete("/remove/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findOneAndRemove({ _id })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});
//Model Delete many documents by name : http://localhost:4000/persons/removeAll/:name
router.delete("/removeAll/:name", (req, res) => {
  const { name } = req.params;
  Person.remove({ name })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

//Chain Search           :           http://localhost:4000/persons/queryChain
// router.patch("/queryChain", (req, res) => {
//   var queryChain = function(done)
//  { let foodToSearch = "burrito";
//   Person
// // find all people who love burritos
//  .find({favoriteFoods:foodToSearch})
// // sort results by name in ascending order
//  .sort({name : "asc"})
// // pick the first 2 records
//  .limit(2)
// // hide the ages
//  .select("-age")
// // execute the query
//  .exec((err, data) => { if(err) done(err); done(null, data); }) };
// });

module.exports = router;
