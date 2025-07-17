import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import './CrudMovie.css';
import './UserReview.css';

const UserReview = () => {
  const [feedbacks, setFeedback] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/feedback/get', config);
    setFeedback(result.data);
  };

  const FeedCard = ({ feedback }) => {
    return (
      <div className="movie-crud">
        <div className="movie-crud-info">
          <h3>{feedback.name}</h3>
          <p>Feedback Date: {feedback.date}</p>
          <p>Rating: {feedback.rating}</p>
          <p>Review: {feedback.review}</p>
        </div>
      </div>
    );
  };

  const handleAdminClick = () => {
    navigate('/admindashboard');
  };
  
    return (
      <div className="crudmovie-container">
        <div className="py-4">
        <h2>USER FEEDBACK</h2>
          <div className="movie-crud-scroll-container">
            <div className="movie-crud-container">
  
              {feedbacks.map((feedback) => (
                <FeedCard key={feedback.id} feedback={feedback} />
              ))}
            </div>
          </div>
        </div>
        <div className='userreview'>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="medium" aria-label="home" className='user-button'>
      <HomeIcon onClick={handleAdminClick}/>
      </Fab>
      </Box>
      </div>
      </div>
    );
  };
  

export default UserReview;
