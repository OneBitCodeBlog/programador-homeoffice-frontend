import React from 'react';
import Modali, { useModali } from 'modali';
import { FaSuitcase, FaMoneyBill, FaLocationArrow } from 'react-icons/fa';

import './style.css';

export default function Card({
  imgUrl,
  title,
  salary,
  location,
  keywords,
  link,
}) {
  const [modal, toggleModal] = useModali({
    title,
    animated: true,
    overlayClose: true,
    buttons: [
      <Modali.Button
        label="Candidatar-se"
        isStyleDefault
        onClick={() => alert('levar usuário a vaga')}
      />,
    ],
  });

  return (
    <div className="card-container" onClick={toggleModal}>
      <img className="job-logo" src={imgUrl} alt="Company Logo" />

      <div className="card-mid">
        <div className="card-text">
          <FaSuitcase />
          <span>{title}</span>
        </div>

        <div className="card-text">
          <FaMoneyBill />
          <span>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(salary)}
          </span>
        </div>

        <div className="card-text">{keywords}</div>
      </div>

      <div className="card-locale">
        <FaLocationArrow />
        {location}
      </div>

      <Modali.Modal {...modal}>
        <section class="row">
          <section class="col-md-6">
            <img className="job-logo" src={imgUrl} alt="Company Logo" />
          </section>

          <section class="col-md-6">
            <div className="card-text">
              <FaMoneyBill />
              <span>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(salary)}
              </span>
            </div>

            <div className="card-text keywords">{keywords}</div>

            <div className="card-location">
              <FaLocationArrow />
              <span>
                {location}
              </span>
            </div>
          </section>
        </section>
      </Modali.Modal>
    </div>
  );
}
