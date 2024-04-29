const router = require("express").Router();
const productController = require("../controllers/products-controller");

router.route("/headphones").get(productController.getHeadphones);

module.exports = router;
