const router = require("express").Router();
const controller = require("../");

router.route("/")
  .get(controller.findAll);

module.exports = router