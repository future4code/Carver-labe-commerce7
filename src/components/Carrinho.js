import React from "react"
import styled from "styled-components";

const ConteinerCarrinho= styled.div`
    border: 1px solid black;
    width: 30vw;
    height: 100vh;
`


export default class Carrinho extends React.Component {



    render() {
       
        return (
            <ConteinerCarrinho>
                Carrinho
            </ConteinerCarrinho>
        )
    }
}