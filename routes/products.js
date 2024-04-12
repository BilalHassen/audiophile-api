const router = require("express").Router();
const productController = require("../controllers/products-controller");

router.route("/").get(productController.getHeadphones);

module.exports = router;
