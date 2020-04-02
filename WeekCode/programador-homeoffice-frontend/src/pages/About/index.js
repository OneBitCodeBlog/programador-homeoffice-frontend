import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';
import AboutContent from '../../components/AboutContent';

export default function About() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
      <MessengerIcon />
    </>
  );
}
