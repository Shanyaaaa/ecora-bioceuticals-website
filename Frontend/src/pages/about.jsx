import React from 'react';
import AboutUs from '../components/AboutUs'; // ✅ Ensure this import is correct
import Navbar from '../components/navbar';
import Footer from '../components/footer'; // ✅ Ensure this import is correct

const About = () => {
  return (
    <div>
    <Navbar />
    < AboutUs />
    <Footer />
     


    </div>
  );
};

export default About; // ✅ Make sure this line is present
