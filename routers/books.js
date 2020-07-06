const Router = require("express");
const router = new Router();
const Book = require("../models").book;
const Category = require("../models").category;

router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;

  try {
    const books = await Book.findAll({
      limit,
      offset,
      include: [Category],
    });
    res.status(200).send({ message: "books retrieved", books });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await Book.findByPk(id, {
      include: [Category],
    });
    if (!book) {
      res.status(400).send("Book not found!");
    } else {
      res.json(book);
    }
  } catch (e) {
    next(e);
  }
});


router.post("/", async (request, response, next) => {
  try {
    const { title, author, genre, year, image, review, price } = request.body;
    if (!title || !author || !genre || !year || !image || !review || !price) {
      res.status(403).send("Not all the parameters of the book were provided");
    } else {
      const book = await Book.create(request.body);
      response.json(book);
    }
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const bookToUpdate = await Book.findByPk(id);
    if (!bookToUpdate) {
      response.status(404).send("Book not found");
    } else {
      const updatedBook = await bookToUpdate.update(request.body);
      response.json(updatedBook);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
