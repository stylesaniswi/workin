require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const connectDB = require("./database");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// get all data
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews";
  connectDB.query(sqlSelect, (err, result) => {
    res.json(result);
  });
});

// create new data
app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInser =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)";
  connectDB.query(sqlInser, [movieName, movieReview], (err, result) => {
    console.log(err);
  });
});

// delete a data
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM movie_reviews WHERE id = ?";
  connectDB.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// update a data
app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  const movieReview = req.body.movieReview;

  const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE id = ?";

  connectDB.query(sqlUpdate, [movieReview, id], (err, result) => {
    console.log(err);
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

