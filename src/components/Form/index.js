import React from 'react';

import './index.css';

export default function Form() {
  return (
    <section>
      <form className="col-md-6 offset-md-3">
        <section className="row">
          <input type="text" placeholder="Pesquise por uma vaga!" className="form-control col-md-8 mr-2" />
          <input type="submit" value="Pesquisar" className="col-md-3 btn_submit" />
        </section>
      </form>

      <br/>

      Você está filtrando por: 
    </section>
  );
}
