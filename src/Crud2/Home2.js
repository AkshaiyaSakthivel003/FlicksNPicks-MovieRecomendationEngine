import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import './Home2.css';

const Home2 = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/api/movies2/get', config);
    setMovies(result.data);
  };

  const deleteMovie = async (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.delete(`http://localhost:8080/api/movies2/delete/${id}`, config);
    loadMovies();
  };

  const handleAddClick = () => {
    navigate('/addcrud2');
  };

  const handleEditClick = (movieId) => {
    navigate(`/editcrud2/${movieId}`);
  };

  const handleAdminClick = () => {
    navigate('/admindashboard');
  };

  return (
    <div className="crud-container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Movie ID</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Release Date</th>
              <th scope="col">Rating</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.date}</td>
                <td>{movie.rating}</td>
                <td>{movie.time}</td>
                <td>
                  <div className="btn-container">
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="medium" aria-label="add" className='add-button'>
                <AddIcon onClick={handleAddClick}/>
                </Fab>
                <Fab size="medium" aria-label="edit" className='edit-button'>
                <EditIcon onClick={() => handleEditClick(movie.id)}/>
                </Fab>
                <Fab size="medium" color="error" aria-label="delete"  className='delete-button'> 
                <DeleteIcon onClick={() => deleteMovie(movie.id)} /> 
                </Fab>
                </Box>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='adminhome'>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="medium" aria-label="add" className='adh-button'>
      <HomeIcon onClick={handleAdminClick}/>
      </Fab>
      </Box>
      </div>
    </div>
  );
};

export default Home2;
