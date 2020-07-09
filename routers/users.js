const { Router } = require("express");
const Customer = require("../models").customer;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await Customer.findAll();
    if (!users) {
      res.status(404).send({ message: "No user was found!" });
    } else {
      res.status(200).send({ message: "All users found!", users });
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    streetName,
    streetNumber,
    postalCode,
    city,
    country,
    phoneNumber,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !streetName ||
    !streetNumber ||
    !postalCode ||
    !city ||
    !country ||
    !phoneNumber
  ) {
    res.status(403).send({ message: "Missing parameters!" });
  }

  const user = await Customer.create({
    firstName,
    lastName,
    email,
    streetName,
    streetNumber,
    postalCode,
    city,
    country,
    phoneNumber,
  });

  res.status(200).send({ message: "Customer created!", user });
});

module.exports = router;
