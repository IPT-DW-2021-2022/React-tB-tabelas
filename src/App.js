/**
 * App.js
 */

import React from "react";
import Tabela from './Tabela';
import Tabela2 from "./Tabela2";

class App extends React.Component {


  render() {
    return (
      <div className="container">
        <h1>Alunos</h1>
        <h4>Primeira tabela</h4>
        <Tabela />

        <br />
        <h4>Segunda tabela</h4>
        <Tabela2 />



      </div>
    )
  }

}
export default App;
