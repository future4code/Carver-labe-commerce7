import React from "react"
import styled from "styled-components";

const ConteinerLoja= styled.div`
    width: 50vw;
    height: 100vh;
`
const Card = styled.div`
    border: 1px solid black;
    width: 15vw;
    height: 40vh;
    text-align: center;
`
const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
const Selecionar = styled.div`
    display: flex;
    height: 20px;
    align-items: baseline;
    gap: 10px;
    margin-right: 5px;
`
const DisplayProdutos = styled.div`
    display: flex;
    gap: 10px;
    width: 50vw;
    border: 1px solid black;
    height: 100vh;
    flex-wrap: wrap;
`

const listaDeMeteoritos = [
    {
        id: 1,
        imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" width="180" height="200"/>,
        produto: "Pedra Lunar",
        valor: "R$ 200,00"
    },
    {
        id: 2,
        imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" width="180" height="200"/>,
        produto: "Meteorito Saturniano",
        valor: "R$ 400,00"
    },
    {
        id: 3,
        imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" width="180" height="200"/>,
        produto: "Pedaço de cometa",
        valor: "R$ 410,00"
    },
    {
        id: 4,
        imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" width="180" height="200"/>,
        produto: "Meteorito Venusiano",
        valor: "R$ 320,00"
    },
]

const meteoritos = listaDeMeteoritos.map((meteorito) => {
    return (
    <Card>
    <p>{meteorito.imagem}</p>
    <p>{meteorito.produto}</p>
    <p>{meteorito.valor}</p>
    <button>Adicionar ao carrinho</button>
    </Card>
    )
});


export default class Loja extends React.Component {

    compararValor = () => {
        const comparaValor = listaDeMeteoritos.sort((a,b)=>{
        if (a.valor > b.valor) {
        return 1;
        }
        if (a.valor < b.valor) {
        return -1;
        }
        return 0;
        });
        return comparaValor
    }
    

    render() {
    return (
        <ConteinerLoja>
        <Cabecalho>
            <h4>Quantidade de produtos: 2</h4>
            <Selecionar>
                <h5>Ordenação</h5>
                <select onChange={this.compararValor}>
                <option value = "Crescente">Crescente</option>
                <option value = "Decrescente">Decrescente</option>
                </select>
            </Selecionar>
         </Cabecalho>
            <DisplayProdutos>
            {meteoritos}
            </DisplayProdutos>
        </ConteinerLoja>
        )
    }
}       
