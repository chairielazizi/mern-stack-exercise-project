const router = require("express").Router(); //express router
let User = require("../models/user.model");

// get request (get data)
router.route("/").get((req, res) => {
  User.find() //mongoose method to get the list of data
    .then((users) => res.json(users)) // return to json file
    .catch((err) => res.status(400).json("Error: " + err));
});

// add user
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
