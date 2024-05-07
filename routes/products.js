const router = require("express").Router();
const productController = require("../controllers/products-controller");

router.route("/headphones").get(productController.getHeadphones);
router.route("/speakers").get(productController.getSpeakers);
router.route("/earphones").get(productController.getEarphones);

router.route("/:id").get(productController.getProductById);
module.exports = router;
