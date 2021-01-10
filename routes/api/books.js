const router = require("express").Router();
const bookController = require("../../controllers/bookController")

//Communicate with "/api/books"
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

// Communicates with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.delete);

module.exports = router;