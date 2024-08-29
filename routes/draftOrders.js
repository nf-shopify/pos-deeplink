const express = require("express");
const router = express.Router();
const draftOrdersCtrl = require('../controllers/draftOrders')

router.get("/", draftOrdersCtrl.createDraftOrder);

module.exports = router;
