// import { Link, useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import validator from 'validator';
// import { addUser } from './data'; 
// import './Register.css';
// import axios from "axios";

// const AdminRegister = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  
//   const nav = useNavigate();

//   const handleRegister = async (e) =>{

//     e.preventDefault();

//     if (email.length === 0 || password.length === 0 || username.length === 0) {
//       alert('Fill All The Required Data');
//     } 
//     else if (!validator.isEmail(email)) {
//       alert('Invalid Email ID');
//     } 
//     else if (password.length < 6 || confirmPassword.length < 6) {
//       alert('Fill The Data Within 6 Character Value');
//     }
//     else if (password !== confirmPassword) {
//       alert('Passwords Do Not Match');
//     } 
//     else 
//     {
//        const response = axios.post("http://localhost:8080/api/auth/register" , 
//        {
//         "name":username,
//         "email":email,
//         "password":password,
//         "role":"ADMIN"
//     })
//        .then((response) =>
//        {
//            console.log("success")
//            nav("/")
//         }).catch((error)=>{
//           console.log(error);
//         });
//         // nav('/');
//       }    
//   };

//   return (
//     <div className="reg-container">
//       <div>
//       <form className="reg-form">
      
//         <h1>REGISTER</h1>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter Email ID"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button onClick={handleRegister}>SIGN UP</button>
//           <p>Already Admin? 
//           <Link className="link1" to="/adminlogin"> Login</Link>
//           </p>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default AdminRegister;
