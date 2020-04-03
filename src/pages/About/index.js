import React from 'react';

import { FaGithub } from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';

import './style.css';

export default function About() {
  const profiles = [
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
    { name: 'José da Esquina', github: 'https://github.com' },
  ];

  return (
    <>
      <Navbar />

      <div className="about">
        <div className="header-title--1">Quem Somos</div>
        <p>
          Somos uma equipe de startup com o objetivo de centralizar as melhores
          vagas disponíveis em outras plataformas e apresentá-las de maneira
          fácil e ágil para pessoas em busca de oportunidades.
        </p>

        <p>
          Também contamos com um chatbot de alarmes para anúncios de novas vagas
        </p>
      </div>

      <div className="colaborators">
        <div className="header-title--2">Colaboradores do Projeto</div>

        <div className="colaborators-profiles">
          {profiles.map((item) => (
            <a className="profile" href={item.github}>
              <div className="profile-name">- {item.name}</div>
              <FaGithub className="github-btn" />
            </a>
          ))}
        </div>
      </div>

      <Footer />
      <MessengerIcon />
    </>
  );
}
