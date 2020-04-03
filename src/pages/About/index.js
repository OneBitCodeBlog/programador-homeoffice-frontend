import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';

import { FaGithub } from 'react-icons/fa';
import './style.css';

export default function About() {
  return (
    <>
        <Navbar />
	    
	    <section className="text-center about">
		  <section className=" col-md-4 offset-md-4 page-header mt-3">
		    <h4>Quem Somos</h4>
		  </section>

		  <section className="container col-md-8 offset-md-2 mt-4">
		    <p>
		      Somos uma equipe de startup com o objetivo de centralizar as melhores
		      vagas disponíveis em outras plataformas e apresentá-las de maneira
		      fácil e ágil para pessoas em busca de oportunidades.
		    </p>

		    <p>
		      Também contamos com um chatbot de alarmes para anúncios de novas vagas
		    </p>
		  </section>

		  <section className="github mt-5">
		    <section className="page-header p-1">
		      <h4>Colaboradores do Projeto</h4>
		    </section>

		    <section className="list container">
		      <section className="row">
		        <section className="col-6">
		          <a href="https://github.com/AnaSelma">
		            - José da Esquina
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>
		        </section>

		        <section className="col-6">
		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>

		          <a
		            href="https://github.com"
		            target="_blank"
		            rel="noopener noreferrer"
		          >
		            -
		            <FaGithub className="github-btn" />
		          </a>
		        </section>
		      </section>
		    </section>
		  </section>
		</section>

        <Footer />
        <MessengerIcon />
    </>
  );
}
