import React from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';
import Card from '../../components/Card';

export default function Jobs() {
  return (
    <>
      <Navbar />
      <section className="jobs_page text-center">
        <section className="col-md-4 offset-md-4 page-header mt-3">
          <h4>Seja Remoto</h4>
        </section>

        <section className="container mt-4 col-md-6 offset-md-3">
          <p>
            Compare vagas de emprego remotas, ache sua vaga 
            ideal e trabalhe em qualquer lugar do mundo!
          </p>
        </section>

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
      </section>

      <Footer />
      <MessengerIcon />
    </>
  );
}
