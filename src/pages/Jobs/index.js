import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

import './style.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MessengerIcon from '../../components/MessengerIcon';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

export default function Jobs() {
  const items = [
    { id: 'foo', label: 'foo' },
    { id: 'bar', label: 'bar' },
    { id: 'baz', label: 'baz' },
  ];

  const keyOptions = [];

  const usedKeyOptions = [];

  items.map((item) => keyOptions.push(item.label));

  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState();
  const [jobs, setJobs] = useState();

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
        {[0, 1, 2, 3, 4].map((job) => (
          <Card
            key={job}
            title="Full Stack Engineer"
            salary={2000}
            contract="PJ"
            job_link="https://github.com"
            key_word={['Node.js', 'Ruby+', 'React']}
            published_data="03/12/2019"
          />
        ))}
        <Pagination />
      </div>

      <Footer />
      <MessengerIcon />
    </>
  );
}
