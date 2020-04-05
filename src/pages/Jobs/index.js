import React, { useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';
import Card from '../../components/Card';

export default function Jobs() {
  const [search, setSearch] = useState();

  const jobApi = [
    {
      id: 1,
      title: 'Programador Frontend',
      published_data: '12/01/2020',
      salary: 2000,
      contract: 'PJ',
      job_link: 'www.example.com',
      key_word: [
        { id: 1, tag: 'React' },
        { id: 2, tag: 'GraphQL' },
      ],
    },
    {
      id: 1,
      title: 'Programador Backend',
      published_data: '12/01/2020',
      salary: 2000,
      contract: 'CLT',
      job_link: 'www.example.com',
      key_word: [
        { id: 1, tag: 'Rails' },
        { id: 2, tag: 'GraphQL' },
      ],
    },
  ];

  async function getJobs(e) {
    e.preventDefault();
  }

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

      <form className="filter" onSubmit={getJobs}>
        <input
          placeholder="Busque por vagas!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="btn_submit">
          Buscar
        </button>
      </form>

      <div className="jobs-container">
        {jobApi.map((job) => (
          <Card
            key={job.id}
            title={job.title}
            salary={job.salary}
            contract={job.contract}
            jobLink={job.job_link}
            keyWord={job.key_word.map((element) => element.tag)}
            published_data={job.published_data}
          />
        ))}
      </div>

      <Footer />
      <MessengerIcon />
    </>
  );
}
