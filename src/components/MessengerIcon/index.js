import React from 'react';

import './style.css';

import icon from '../../assets/images/messenger.png';

function show() {
  var x = document.getElementsByClassName("messenger_div");
  x[0].style.display = "block";
}

function hide() {
  var x = document.getElementsByClassName("messenger_div");
  x[0].style.display = "none";
}

export default function MessengerIcon() {
  return (
    <a
      className="messenger"
      href="https://facebook.com.br"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={show}
      onMouseLeave={hide}
    > 
      <div className="messenger_div">
        <div className="messenger-text">
          <p>Quer receber atualizações em tempo real no Messenger?</p>
          <p>Conheça nosso serviço!</p>
        </div>
        <span />
      </div>

      <img src={icon} alt="Messenger Icon" />
    </a>
  );
}
