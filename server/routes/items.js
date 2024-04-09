const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// Gets all items 
router.get("/", async (req, res, next) => {
  try {
    const item = await Item.findAll();
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// Gets only 1 item.
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
