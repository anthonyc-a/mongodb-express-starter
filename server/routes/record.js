const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

recordRoutes.route("/todos").get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("todos")
    .find({})
    .limit(20)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route("/todos/addTodo").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const todoDocument = {
    title: req.body.title,
    description: req.body.description,
    last_modified: new Date(),
  };

  dbConnect.collection("todos").insertOne(todoDocument, function (err, result) {
    if (err) {
      res.status(400).send("Error inserting todo!");
    } else {
      console.log(`Added ${todoDocument.title}`);
      res.status(204).send();
    }
  });
});

recordRoutes.route("/todos/delete/:id").delete((req, res) => {
  const dbConnect = dbo.getDb();
  const listingQuery = { listing_id: req.body.id };

  dbConnect
    .collection("todos")
    .deleteOne(listingQuery, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
      } else {
        console.log("1 document deleted");
      }
    });
});

module.exports = recordRoutes;
