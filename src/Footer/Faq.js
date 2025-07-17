import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Faq.css';
import Contact from './Contact';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Flicks&Picks?",
      answer: "Flicks&Picks is a movie recommender system designed to help you discover the perfect movies based on your preferences and viewing history. We provide personalized movie recommendations to enhance your cinematic experience.",
      image: "https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
    },
    {
      question: "How does Flicks&Picks work?",
      answer: "Flicks&Picks utilizes advanced algorithms and artificial intelligence to analyze your movie preferences, genre choices, and viewing habits. We then offer tailored movie recommendations that align with your unique tastes.",
      image: "https://help.nflxext.com/7ac9b493-ae69-431a-923d-3cb8a79d7e63_what_is_netflix_3_en.png"
    },
    {
      question: "Is Flicks&Picks free to use?",
      answer: "Yes, Flicks&Picks offers a free service for movie enthusiasts. However, we may also offer premium features or subscription plans in the future to enhance your experience further.",
      image: "https://help.nflxext.com/b3e9e3a3-20ff-4974-87d4-162e0a547768_what_is_netflix_4_en.png"
    },
    {
      question: "How do I create an account on Flicks&Picks?",
      answer: "Creating an account is easy! Simply click on the 'Sign Up' or 'Register' button, and you'll be guided through the account creation process. Provide your details, and you'll be ready to explore personalized movie recommendations.",
      image: "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
    },
    {
      question: "Can I use Flicks&Picks on multiple devices?",
      answer: "Yes, you can access Flicks&Picks on multiple devices. Whether you're using a computer, tablet, or mobile phone, your movie preferences and recommendations will sync across all your devices for a seamless experience.",
      image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      question: "Are my viewing habits and data kept private?",
      answer: "Absolutely! We take your privacy seriously. Your viewing history and personal information are treated with the utmost confidentiality. You can learn more about our data handling practices in our Privacy Policy.",
      image: "https://images.pexels.com/photos/8261819/pexels-photo-8261819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      question: "How accurate are the movie recommendations?",
      answer: "We strive to provide highly accurate recommendations based on your preferences. However, the accuracy may vary, as it depends on your interaction with the platform and the data available. We're continually improving our recommendation algorithms to enhance accuracy.",
      image: "https://images.pexels.com/photos/8261829/pexels-photo-8261829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      question: "Can I provide feedback on movie recommendations?",
      answer: "Yes, your feedback is valuable to us! You can rate movies, provide reviews, and offer feedback on our recommendations. Your input helps us refine our algorithms and enhance your experience.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      question: "What if I have more questions or need assistance?",
      answer: "Feel free to reach out to our dedicated support team at TeamFlicks&Picks@gmail.com. We're here to assist you with any questions, concerns, or inquiries you may have about Flicks&Picks.",
      image: "https://images.pexels.com/photos/8263349/pexels-photo-8263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      question: "How often are new movies added to Flicks&Picks?",
      answer: "We regularly update our movie database to ensure you have access to the latest releases and a diverse selection of films from various genres and eras. New movies are added on a regular basis to keep your movie choices fresh.",
      image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  const nav = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleContactClick = () => {
    nav('/contact');
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <ul>
        {faqItems.map((item, index) => (
          <li key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
            {item.image && activeIndex === index && (
              <img src={item.image} alt={`Image for ${item.question}`} className="faq-image" />
            )}
          </li>
        ))}
      </ul>
      <div className="contact-button-container">
        <p>
          Need More Help ? <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
        </p>
      </div>
    </div>
  );
};

export default Faq;
