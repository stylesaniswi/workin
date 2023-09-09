import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Database = () => {
    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    const [movieReviewList, setMoviewReviewList] = useState([]);
  
    const [newReview, setNewReview] = useState("");
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/get")
        .then((response) => {
          setMoviewReviewList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [movieReviewList]);
  
    const submitReview = async (e) => {
      e.preventDefault();
      await axios
        .post("http://localhost:5000/api/insert", {
          movieName: movieName,
          movieReview: review,
        })
        .then((result) => {
          setMoviewReviewList([
            ...movieReviewList,
            { movieName: movieName, movieReview: review },
          ]);
        });
  
        
    };
  
    const deleteReview = (id) => {
      axios.delete(`http://localhost:5000/api/delete/${id}`).then((result) => {
        console.log(result);
      });
    };
  
    const updateReview = async (id) => {
      await axios
        .put(`http://localhost:5000/api/update/${id}`, {
          movieReview: newReview,
        })
        .then((result) => {
          console.log(result);
        });
  
      setNewReview("");
    };
  
    return (
      <div className="App">
        <h1>CRUD APPLICATION</h1>
  
        <div className="form">
          <label htmlFor="name">Movie Name</label>
          <input
            type="text"
            name="movieName"
            id="name"
            onChange={(e) => setMovieName(e.target.value)}
          />
          <label htmlFor="review">Review</label>
          <input
            type="text"
            name="review"
            id="review"
            onChange={(e) => setReview(e.target.value)}
          />
          <button onClick={submitReview}>Submit</button>
          <hr />
  
          {movieReviewList &&
            movieReviewList.map((val) => {
              return (
                <div className="card" key={val.id}>
                  <h1>{val.movieName}</h1>
                  <p>{val.movieReview}</p>
                  <button
                    onClick={() => {
                      deleteReview(val.id);
                    }}
                  >
                    Delete
                  </button>
                  <input
                    type="text"
                    id="updateInput"
                    onChange={(e) => setNewReview(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      updateReview(val.id);
                    }}
                  >
                    Update
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    )
}

export default Database