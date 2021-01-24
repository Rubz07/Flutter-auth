const express = require("express");
const actions = require("../methods/actions");
const router = express.Router();
var User = require("../models/user");
router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/dashboard", async (req, res) => {
  let users = await User.find({}).select("name");
  res.send(users);
});

//@desc Adding new user
//@route POST /adduser
router.post("/adduser", actions.addNew);

//@desc Authenticate a user
//@route POST /authenticate
router.post("/authenticate", actions.authenticate);

//@desc Get info on a user
//@route GET /getinfo
router.get("/getinfo", actions.getinfo);

module.exports = router;
