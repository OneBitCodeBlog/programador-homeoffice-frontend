import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';
import Card from '../../components/Card';

export default function Jobs() {
  const items = [
    { id: 0, label: 'foo' },
    { id: 1, label: 'bar' },
    { id: 2, label: 'baz' },
  ];

  const keyOptions = [];

  const usedKeyOptions = [];

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

  items.map((item) => keyOptions.push(item.label));

  // eslint-disable-next-line
  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState();

  function loadKeys(e) {
    e.preventDefault();

    if (keyOptions.includes(value)) {
      usedKeyOptions.push(value);
    }

    setKeys(usedKeyOptions);
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

      <form className="filter" onSubmit={loadKeys}>
        <Autocomplete
          getItemValue={(item) => item.label}
          items={items}
          renderItem={(item) => (
            <div style={{ background: 'white', color: 'black' }}>
              {item.label}
            </div>
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(val) => setValue(val)}
        />

        <button type="submit" className="btn_submit">
          Adicionar
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
