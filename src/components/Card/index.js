import React from 'react';
import Modali, { useModali } from 'modali';
import { FaSuitcase, FaMoneyBill } from 'react-icons/fa';

import './style.css';

export default function Card({
  title,
  salary,
  contract,
  keyWord,
  jobLink,
  published_data,
}) {
  const [modal, toggleModal] = useModali({
    title,
    animated: true,
    overlayClose: true,
    buttons: [
      <Modali.Button
        label="Candidatar-se"
        isStyleDefault
        onClick={() => {
          window.open(jobLink, '_blank');
        }}
      />,
    ],
  });

  return (
    <div className="card-container" onClick={toggleModal}>
      <div className="card-title">
        <FaSuitcase />
        <span>{title}</span>
      </div>

      <div className="card-salary">
        <FaMoneyBill />
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(salary)}
      </div>

      <div className="card-locale">{contract}</div>

      <div className="card-keywords">
        {keyWord.map((keyWord) => (
          <div className="card-keywords" key={keyWord.index}>
            {keyWord}
          </div>
        ))}
      </div>

      <Modali.Modal {...modal}>
        <div className="modal-salary">
          <span>Remuneração: </span>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(salary)}
        </div>

        <div className="modal-locale">
          <span>Contrato: </span>
          {contract}
        </div>

        <div className="modal-keywords">
          {keyWord.map((keyWord) => (
            <div className="modal-keyword" key={keyWord.index}>
              {keyWord}
            </div>
          ))}
        </div>

        <div className="modal-publish">
          <span>Publicada em: </span>
          {published_data}
        </div>
      </Modali.Modal>
    </div>
  );
}
