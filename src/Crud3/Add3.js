import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "../Crud/Add.css";

export default function AddMovie3() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({
    name: "",
    date: "",
    rating: "",
    time: ""
  });

  const { name, date, rating, time } = movie;

  const onInputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const movieDataFromHome = location.state?.movieData;

    if (movieDataFromHome) {
      setMovie(movieDataFromHome);
    } else {
      loadMovie();
    }
  }, []);

  const onSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/movies3/post`, movie, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate("/crudhome3");
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const loadMovie = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:8080/api/movies3/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMovie(response.data);
    } catch (error) {
      console.error("Error loading movie:", error);
    }
  };

  return (
    <div className="crud-container">
      <div className="row">
        <div className="movie-form">
          <h2 className="text-center m-4">ADD MOVIE DETAILS</h2>
          
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                MOVIE NAME
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Movie Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                RELEASE DATE
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Rating" className="form-label">
                RATING
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Rating"
                name="rating"
                value={rating}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Time" className="form-label">
                TIME
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Time"
                name="time"
                value={time}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="btn-container">
            <button type="submit" className="btn-submit">
              SUBMIT
            </button>
            <button type="submit" className="btn-cancel" onClick={() => navigate("/crudhome3")}>
              CANCEL
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
