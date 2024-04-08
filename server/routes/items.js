const express = require("express");
const router = express.Router();
const { Items } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Items.findAll();
    res.send(Items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
