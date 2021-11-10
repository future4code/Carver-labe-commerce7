import React from "react"
import styled from "styled-components";


const ConteinerFiltro= styled.div`
    border: 1px solid black;
    width: 20vw;
    height: 100vh;
`

export default class Filtro extends React.Component {



    render() {
       
        return (
            <ConteinerFiltro>
                Filtro
            </ConteinerFiltro>
        )
    }
}