import React from 'react';

import './style.css';

export default function Form() {
  return (
    <form className="filter">
      <input type="text" placeholder="Pesquise por palavras chaves!" />
      <button type="submit" className="btn_submit">
        Pesquisar
      </button>
    </form>
  );
}
