import React from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';
import Card from '../../components/Card';
import Form from '../../components/Form';

export default function Jobs() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <div className="header-title--1">Seja Remoto</div>
        <p>
          Compare vagas de emprego remotas, ache sua vaga ideal e trabalhe em
          qualquer lugar do mundo!
        </p>
      </div>

      <Form />

      <div className="jobs-container">
        {[0, 1, 2, 3, 4].map((job) => (
          <Card
            key={job}
            title="Full Stack Engineer"
            imgUrl="http://brand.vtex.com/static/media/VTEX_pink_RGB.751a9fb5.svg"
            salary={2000}
            location="Araruama, RJ"
            keywords={['Node.js', 'Ruby+', 'React']}
          />
        ))}
      </div>

      <Footer />
      <MessengerIcon />
    </>
  );
}
