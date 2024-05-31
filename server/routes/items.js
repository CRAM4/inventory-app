// + Changed file name from sauces to items
// + This file defines the routes for the Item model

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

// + Gets only 1 item
router.get("/:id", async (req, res, next) => {
  try {
    // It tries to find an item in the database by its primary key (ID)
    const item = await Item.findByPk(req.params.id);
    // The server responds with the found item
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// + Adds a new item
router.post("/", async (req, res, next) => {
  try {
    // It creates a new item in the database with the data in the request body
    const newItem = await Item.create(req.body);
    // The server responds with the created item
    res.send(newItem);
  } catch (error) {
    next(error);
  }
});

// + Delete an item
router.delete("/:id", async (req, res, next) => {
  try {
    // It tries to find an item in the database by its primary key (ID)
    const item = await Item.findByPk(req.params.id);
    // If the item is found, it's deleted from the database
    await item.destroy();
    // The server responds with the deleted item
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// + Updates an item
router.put("/:id", async (req, res, next) => {
  try {
    // It tries to find an item in the database by its primary key (ID)
    const item = await Item.findByPk(req.params.id);
    // If the item is found, it's updated with the data in the request body
    await item.update(req.body);
    // The server responds with the updated item
    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
