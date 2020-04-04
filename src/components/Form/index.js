import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

import './style.css';

export default function Form() {
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

  function loadKeys(e) {
    e.preventDefault();

    if (keyOptions.includes(value)) {
      usedKeyOptions.push(value);
    }

    setKeys(usedKeyOptions);
  }

  return (
    <>
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
    </>
  );
}
