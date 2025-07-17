// AboutUs.js

import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us">
        <h1 className='hd'>Flicks&Picks - About Us </h1>
        <p>Welcome to Flicks&Picks, your go-to destination for personalized movie recommendations and an immersive cinematic experience. At Flicks&Picks, we are passionate about helping you discover the perfect films tailored to your unique tastes and preferences.</p>
        <section className="section">
          <h2>Our Mission</h2>
          <p>Our mission is to make your movie-watching journey enjoyable, hassle-free, and filled with cinematic wonders. We understand that choosing the right movie can be a challenge in today's vast entertainment landscape. That's why we've created Flicks&Picks - to simplify your movie choices and enhance your viewing pleasure.</p>
        </section>

        <section className="section">
          <h2>How Flicks&Picks Works</h2>
          <p>Flicks&Picks utilizes cutting-edge algorithms and artificial intelligence to analyze your viewing history, preferences, and feedback. We then provide you with carefully curated movie recommendations that match your interests. Whether you're a fan of action-packed blockbusters, heartwarming dramas, mind-bending thrillers, or anything in between, Flicks&Picks has got you covered.</p>
        </section>

        <section className="section">
          <h2>Our Commitment to Privacy</h2>
          <p>We take your privacy seriously. Your data and personal information are handled with the utmost care and are used exclusively to improve your movie recommendations. You can explore our comprehensive Privacy Policy to learn more about how we protect your information.</p>
        </section>

        <section className="section">
          <h2>Why Choose Flicks&Picks</h2>
          <ul>
          <li>
            <strong>Personalized Recommendations:</strong> Say goodbye to endless scrolling and disappointing movie choices. Flicks&Picks ensures that every movie you watch is a delightful experience tailored to your preferences.
          </li>
          <li>
            <strong>Diverse Selection:</strong> Our vast database includes movies from every genre and era, ensuring there's always something for everyone.
          </li>
          <li>
            <strong>User-Focused Design:</strong> We continuously refine our platform to provide an intuitive and user-friendly experience.
          </li>
          <li>
            <strong>Passion for Cinema:</strong> We share your love for movies and are dedicated to helping you discover hidden gems and cinematic masterpieces.
          </li>
        </ul>
        </section>

        <section className="section">
          <h2>Contact Us</h2>
          <p>Have questions, suggestions, or feedback? We'd love to hear from you. Reach out to our dedicated support team at TeamFlicks&Picks@gmail.com, and we'll be delighted to assist you.</p>

<p> Thank you for choosing Flicks&Picks as your movie companion. Join us on this cinematic journey, and let's make every movie night extraordinary!</p>
        </section>
      </div>
    );
  }
}

export default AboutUs;