const baseURL = "http://localhost:8080";
module.exports = [
  {
    id: 1,
    name: "YX1 Wireless Earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: "earphones",
    is_new: "true", // Convert to string representing boolean value
    price: 599,
    url_mobile: `${baseURL}/product-yx1-earphones/mobile/image-category-page-preview.jpg`,
    url_tablet: `${baseURL}/product-yx1-earphones/tablet/image-category-page-preview.jpg`,
    url_desktop: `${baseURL}/product-yx1-earphones/desktop/image-category-page-preview.jpg`,
  },
  {
    id: 2,
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: "headphones",
    is_new: "true", // Convert to string representing boolean value
    price: 2999,
    url_mobile: `${baseURL}/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg`,
    url_tablet: `${baseURL}/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg`,
    url_desktop: `${baseURL}/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg`,
  },
  {
    id: 3,
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: "headphones",
    is_new: "false", // Convert to string representing boolean value
    price: 1750,
    url_mobile: `${baseURL}/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg`,
    url_tablet: `${baseURL}/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg`,
    url_desktop: `${baseURL}/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg`,
  },
  {
    id: 4,
    name: "XX59-Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move",
    category: "headphones",
    is_new: "false", // Convert to string representing boolean value
    price: 899,
    url_mobile: `${baseURL}/product-xx59-headphones/mobile/image-category-page-preview.jpg`,
    url_tablet: `${baseURL}/product-xx59-headphones/tablet/image-category-page-preview.jpg`,
    url_desktop: `${baseURL}/product-xx59-headphones/desktop/image-category-page-preview.jpg`,
  },
  {
    id: 5,
    name: "ZX7 Speaker",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: "speakers",
    is_new: "false", // Convert to string representing boolean value
    price: 3500,
    url_mobile: `${baseURL}/product-zx7-speaker/mobile/image-category-page-preview.jpg`,
    url_tablet: `${baseURL}/product-zx7-speaker/tablet/image-category-page-preview.jpg`,
    url_desktop: `${baseURL}/product-zx7-speaker/desktop/image-category-page-preview.jpg`,
  },
  {
    id: 6,
    name: "ZX9 Speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    category: "speakers",
    is_new: "true", // Convert to string representing boolean value
    price: 4500,
    url_mobile: `${baseURL}/product-zx9-speaker/mobile/image-category-page-preview.jpg`,
    url_tablet: `${baseURL}/product-zx9-speaker/tablet/image-category-page-preview.jpg`,
    url_desktop: `${baseURL}/product-zx9-speaker/desktop/image-category-page-preview.jpg`,
  },
];
