const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET all items 
router.get("/", async (req, res, next) => {
  try {
    const item = await Item.findAll();
    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
