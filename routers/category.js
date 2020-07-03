const Router = require("express");
const Category = require("../models").category;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { genre } = req.body;
    if (!genre) {
      res
        .status(403)
        .send("You didn't provide the genre for creating a category!");
    } else {
      const categories = await Category.create(req.body);
      res.status(200).send({ message: "Category created!", categories });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
