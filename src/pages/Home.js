import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-text">
          <h1>Wisata <br /> Pulau Seribu</h1>
          <p>Explore thousands of islands in the land of Jakarta.</p>
          <Link to="/destinations" className="home-btn">See More!</Link>
        </div>
      </section>
      <footer className="bg-slate-600 py-8 w-full">
        <div className="container mx-auto text-center text-white font-Poppins font-bold">
          <h1 className="text-lg">"© 2023 Wisata Pulau Seribu | All Right Reserved"</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;
