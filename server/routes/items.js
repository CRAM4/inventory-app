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

// Adds a new item
router.post("/", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.send(newItem);
  } catch (error) {
    next(error);
  }
});

// Delete an item
router.delete("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    if (item){
      await item.destroy()
      res.send({messege:"item deleted"})
    } else{
      res.status(404).send({messege:"item not found"})
    }
  }catch (error) {
    next(error);
  }
});

module.exports = router;
