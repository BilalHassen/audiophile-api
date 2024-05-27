// Import the Router class from the Express module
const router = require("express").Router();

// Import the addItem function from the carts-controller module
const cartsController = require("../controllers/carts-controllers");

// Define a route for adding an item to the cart.
// This route expects a POST request and includes a dynamic parameter ':id' in the URL.
router.route("/additem/:id").post(cartsController.addItem);

// Export the router object to make it available for use in other modules
module.exports = router;
