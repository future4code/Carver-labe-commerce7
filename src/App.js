import React from 'react';
import styled from "styled-components";
import Loja from "./components/Loja";

const ConteinerApp= styled.div`
  display: flex;
  margin: 15px;
`

export default class App extends React.Component {


  render() {
  return (
    <ConteinerApp>
        <Loja/>
    </ConteinerApp>
  );

  }
}


