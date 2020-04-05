import React from 'react';

import './style.css';

export default function Pagination() {
  function nextPage() {
    alert('avança uma pagina');
  }

  function prevPage() {
    alert('volta uma pagina');
  }

  return (
    <div className="actions">
      <button type="button" onClick={prevPage}>
        Anterior
      </button>
      <button type="button" onClick={nextPage}>
        Próximo
      </button>
    </div>
  );
}
