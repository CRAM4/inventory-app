// + This file is the main router file that will be used to route to different model routers

const express = require("express");
const router = express.Router();

// different model routers
// + Changed sauces to items
router.use('/items', require('./items'));

module.exports = router;
