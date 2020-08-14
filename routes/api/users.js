const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .post(usersController.create);

// Matches with "/api/users/:email"
router
  .route("/:email")
  .get(usersController.findOne);

// Matches with "/api/users/officials/:id"
router
  .route("/officials/:email")
  .put(usersController.addOfficial);

// Matches with "/api/users/events/:id"
router
  .route("/events/:email")
  .put(usersController.addEvent);

// Matches with "/api/users/places/:id"
router
  .route("/places/:email")
  .put(usersController.addPollingSite);

// Matches with "/api/users/events/delete/:id"
router
  .route("/events/delete/:email")
  .put(usersController.deleteEvent);

router
  .route("/officials/delete/:email")
  .put(usersController.deleteOfficial);

router
  .route("/places/delete/:email")
  .put(usersController.deletePlace);

module.exports = router;