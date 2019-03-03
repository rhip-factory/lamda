const express = require("express");
const router = express.Router();

//@route GET api/users/
//@desc Default
//@access Public
router.get("/", (req, res) => {
  res.json("Default");
});
module.exports = router;
