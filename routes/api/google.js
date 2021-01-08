const router = require("express").Router();
const googleController = require("");

//Enable correspondence with "/api/google"
router.route("/")
    .get(googleController.findAll);

module.exports = router;