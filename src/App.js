import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './SignUp/Register';
import Navbar from './Home/Navbar'; 
import Login from './SignUp/Login';
import store from './store';
import Dashboard from './Home/Dashboard';
import Search from './Home/Search';
import Favorites from './Home/Favorites';
import Footer from './Home/Footer';
import AdminDashboard from './Admin/AdminDashboard';
import MovieDetails from './Movie/MovieDetails';
import { MovieProvider } from './MovieContext';
import Genre from './Home/Genre';
import PrivacyPolicy from './Footer/PrivacyPolicy';
import TermsAndConditions from './Footer/Terms';
import AboutUs from './Footer/AboutUs';
import Faq from './Footer/Faq';
import Contact from './Footer/Contact';
import Trending from './Home/Trending';
import AdminLogin from './Admin/AdminLogin';
import Home from './Crud/Home';
import EditMovie from './Crud/Edit';
import LoginWithPhone from './SignUp/Phone';
import AddMovie from './Crud/Add';
import Home2 from './Crud2/Home2';
import EditMovie2 from './Crud2/Edit2';
import AddMovie2 from './Crud2/Add2';
import Home3 from './Crud3/Home3';
import EditMovie3 from './Crud3/Edit3';
import AddMovie3 from './Crud3/Add3';
import Feedback from './Home/Feedback';
import MovieDetails2 from './Movie/MovieDetails2';
import MovieList2 from './Movie/MovieList2';
import FeedbackList from './Movie/UserReview';
import MyProfile from './Home/MyProfile';
import Explore from './Home/Explore';
import UserProfiles from './Admin/UserProfiles';
import UserReview from './Movie/UserReview';

const App = () => {
  const userRole = localStorage.getItem('role');
  return (
<Provider store={store}>
  <div>
    <Router>
    <MovieProvider>
    <Navbar /> 
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/phone" element={<LoginWithPhone />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/trending" element={<Trending />} />
        <Route exact path="/terms" element={<TermsAndConditions/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/feed" element={<FeedbackList/>} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/user-profiles" element={<UserProfiles />} />
        <Route exact path="/user-review" element={<UserReview />} />

        
        {(userRole === 'ADMIN' || userRole === 'CUSTOMER') && ( 
        <>
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/fav" element={<Favorites/>} />
          <Route exact path="/genre" element={<Genre/>} />
          <Route exact path="/movie/:id" element={<MovieDetails/>} />
          <Route exact path="/mli" element={<MovieList2/>} />
          <Route path="/movies/:movieName" element={<MovieDetails2/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route exact path="/feedback" element={<Feedback />} />
        </>
        )}

        {userRole === 'ADMIN' && ( 
        <>
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/addcrud" element={<AddMovie />} />
        <Route exact path="/addcrud2" element={<AddMovie2 />} />
        <Route exact path="/addcrud3" element={<AddMovie3 />} />
        <Route exact path="/editcrud/:id" element={<EditMovie />} /> 
        <Route exact path="/editcrud2/:id" element={<EditMovie2 />} /> 
        <Route exact path="/editcrud3/:id" element={<EditMovie3 />} /> 
        <Route path="/crudhome" element={<Home/>} />
        <Route path="/crudhome2" element={<Home2/>} />
        <Route path="/crudhome3" element={<Home3/>} />
        {/* <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}
        </>
        )}
    </Routes>
    <Footer />
    </MovieProvider>
    </Router>
  </div>
</Provider>
);
};

export default App;