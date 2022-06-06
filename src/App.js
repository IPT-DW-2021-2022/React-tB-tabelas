/**
 * App.js
 */

import React from "react";
import Tabela from './Tabela';
import Tabela2 from "./Tabela2";
import Tabela3 from "./Tabela3";


class App extends React.Component {
  render() {
// definição de dados em modo 'props'
// estes dados têm uma grande particularidade: Não se podem alterar
// https://www.json.org/json-en.html
    const alunos = [
      {
        nome: "Ana",
        apelido: "Silva",
      },
      {
        nome: "Mário",
        apelido: "Lopes",
      },
    ]


    return (
      <div className="container">
        <h1>Alunos</h1>
        <h4>Primeira tabela</h4>
        <p>tabela com código <i>100% hardcode</i></p>
        <Tabela />

        <br />
        <h4>Segunda tabela</h4>
        <p>Uso de componentes internos</p>
        <Tabela2 />

        <br />
        <h4>Terceira tabela</h4>
        <p>Uso de dados externos ao componente (Props)</p>
        <Tabela3 dadosAlunosIN={alunos} />

<br/><br/>
      </div>
    )
  }

}
export default App;
