import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import '../Crud3/Home3.css';

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/api/auth/users', config);
    setUsers(result.data);
  };

  const deleteMovie = async (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.delete(`http://localhost:8080/api/movies3/delete/${id}`, config);
    loadUsers();
  };

  const handleAddClick = () => {
    navigate('/addcrud3');
  };

  const handleEditClick = (userId) => {
    navigate(`/editcrud3/${userId}`);
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
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">Password</th>
              <th scope="col">User Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.role}</td>
                <td>
                <div className='btn-container'>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="medium" aria-label="add" className='add-button'>
                <AddIcon onClick={handleAddClick}/>
                </Fab>
                <Fab size="medium" aria-label="edit" className='edit-button'>
                <EditIcon onClick={() => handleEditClick(user.uid)}/>
                </Fab>
                <Fab size="medium" color="error" aria-label="delete"  className='delete-button'> 
                <DeleteIcon onClick={() => deleteMovie(user.uid)} /> 
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

export default UserProfiles;
