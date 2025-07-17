import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "../Crud/Add.css";

export default function Feedback() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    name: "",
    date: "",
    rating: "",
    review: ""
  });

  const { name, date, rating, review } = feedback;

  const onInputChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const movieDataFromHome = location.state?.movieData;

    if (movieDataFromHome) {
      setFeedback(movieDataFromHome);
    } else {
      loadFeedback();
    }
  }, []);

  const onSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    try {
      console.log(feedback);
      await axios.post(`http://localhost:8080/feedback/post`, feedback, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const loadFeedback = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:8080/feedback/get`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFeedback(response.data);
    } catch (error) {
      console.error("Error loading movie:", error);
    }
  };

  return (
    <div className="crud-container">
      <div className="row">
        <div className="movie-form">
          <h2 className="text-center m-4">FEEDBACK</h2>
          
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                USER NAME
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
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
              <label htmlFor="text" className="form-label">
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
              <label htmlFor="text" className="form-label">
                REVIEW
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Review"
                name="review"
                value={review}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="btn-container">
            <button type="submit" className="btn-submit">
              SUBMIT
            </button>
            <button type="submit" className="btn-cancel" onClick={() => navigate("/dashboard")}>
              CANCEL
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
