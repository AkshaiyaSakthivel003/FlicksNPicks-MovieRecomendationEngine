import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieRecommendationPage from './components/MovieRecommendationPage';
import Register from './Register';
import Navbar from './Navbar'; 
import Login from './Login';
import store from './store';
import Dashboard from './Dashboard';
import Search from './Search';

const App = () => {
  return (
<Provider store={store}>
  <div>
    <Navbar /> 
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/movies" element={<MovieRecommendationPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/search" element={<Search/>} />
      </Routes>
    </Router>
  </div>
</Provider>
);
};

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from './Register';
// import Login from './Login';
// import Navbar from './Navbar'; 

// function App() {
  //   return (
    //     <div className="App">
    //       <Navbar /> 
    //       <Router>
    //         <Routes>
    //           <Route exact path="/" element={<Login />} />
    //           <Route exact path="/reg" element={<Register />} />
    //         </Routes>
    //       </Router>
    //     </div>
    //   );
    // }
    
    // export default App;
    

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import MovieRecommendationPage from './components/MovieRecommendationPage';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <MovieRecommendationPage />
//       </div>
//     </Provider>
//   );
// };

// export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import store from './store';
// import MovieRecommendationPage from './components/MovieRecommendationPage';
// import Register from './Register';
// import Login from './Login';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route exact path="/reg" element={<Register />} />
//             <Route exact path="/movies" element={<MovieRecommendationPage />} />
//           </Routes>
//         </Router>
//       </div>
//     </Provider>
//   );
// };

// export default App;
