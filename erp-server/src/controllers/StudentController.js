const express = require("express");
const Student = require("../models/StudentModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    
    const data = await Student.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

// find all   http://localhost:2345/product

router.get("", async (req, res) => {
  try {
    const data = await Student.find().lean().exec();
    
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;