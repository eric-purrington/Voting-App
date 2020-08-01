const router = require("express").Router();
const gapiRoutes = require("./gapi");

// User routes
router.use("/", gapiRoutes);

module.exports = router;