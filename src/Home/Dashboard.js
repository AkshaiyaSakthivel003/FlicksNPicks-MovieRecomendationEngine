import React from "react";
import MovieList from '../Movie/MovieList';
import './Dashboard.css';
import MovieCarousel from "../Movie/MovieCarousel";
import CrudMovie from "../Movie/CrudMovie";
import CrudMovie2 from "../Movie/CrudMovie2";
import CrudMovie3 from "../Movie/CrudMovie3";
import MovieList2 from "../Movie/MovieList2";

const Dashboard = () => {
 
  return (
    <>
      <div className="carousel-container">
        <div className="poster">
          <MovieCarousel />
          <MovieList2 />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

