const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/:id", checkJWT)
  // .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/officials/:id"
router
  .route("/officials/:id")
  .put(usersController.addOfficial);

// Matches with "/api/users/events/:id"
router
  .route("/events/:id")
  .put(usersController.addEvent);

// Matches with "/api/users/places/:id"
router
  .route("/places/:id")
  .put(usersController.addPollingSite);

// Matches with "/api/users/events/delete/:id"
router
  .route("/events/delete/:id")
  .put(usersController.deleteEvent);

router
  .route("/officials/delete/:id")
  .put(usersController.deleteOfficial);

module.exports = router;