const express = require("express");
const Events = require("../models/EventsModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const data = await Events.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});


router.get("", async (req, res) => {
  try {
    const data = await Events.find().lean().exec();
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;