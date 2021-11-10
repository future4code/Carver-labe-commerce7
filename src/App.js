import React from 'react';
import styled from "styled-components";
import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho";
import Loja from "./components/Loja";

const ConteinerApp= styled.div`
  display: flex;
  margin: 15px;
`

export default class App extends React.Component {


  render() {
    console.log("funciona")
  return (
    <ConteinerApp>
        <Filtro/>
        <Loja/>
        <Carrinho/>
    </ConteinerApp>
  );

  }
}


