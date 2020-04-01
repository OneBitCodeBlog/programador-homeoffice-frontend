import React from 'react';

import './style.css';

import icon from '../../assets/images/messenger.png';

export default function MessengerIcon() {
  return (
    <a
      className="messenger"
      href="https://facebook.com.br"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="messenger-text">
        <p>Quer receber atualizações em tempo real no Messenger?</p>
        <p>Conheça nosso serviço!</p>
      </div>
      <span />
      <img src={icon} alt="Messenger Icon" />
    </a>
  );
}
