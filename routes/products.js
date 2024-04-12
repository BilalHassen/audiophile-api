const router = require("express").Router();
const productController = require("../controllers/products-controller");

router.route("/").get(productController.getImages);

module.exports = router;
