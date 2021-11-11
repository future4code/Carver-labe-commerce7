import React from "react"
import styled from "styled-components";

const ConteinerLoja = styled.div`
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





export default class Loja extends React.Component {
    state = {
        sequencia: "",

        listaDeMeteoritos: [
            {
                id: 1,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem1" width="180" height="200" />,
                produto: "Pedra Lunar",
                valor: "R$ 200,00"
            },
            {
                id: 2,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem2" width="180" height="200" />,
                produto: "Meteorito Saturniano",
                valor: "R$ 400,00"
            },
            {
                id: 3,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem3" width="180" height="200" />,
                produto: "Pedaço de cometa",
                valor: "R$ 410,00"
            },
            {
                id: 4,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem4" width="180" height="200" />,
                produto: "Meteorito Venusiano",
                valor: "R$ 320,00"
            },
        ]
    }

    onChangeOrdenacao = (event) => {
        this.setState({ sequencia: event.target.value })
    }




    listaCrescente = () => {
        const crescente = this.state.listaDeMeteoritos.sort((a, b) => {
            return a.valor.localeCompare(b.valor)
        })
        this.setState({ listaDeMeteoritos: crescente })
    }

    listaDecrescente = () => {
        const decrescente = this.state.listaDeMeteoritos.sort((a, b) => {
            return b.valor.localeCompare(a.valor)
        })
        this.setState({ listaDeMeteoritos: decrescente })
    }

    listaOrdenada = () => {
        switch (this.state.sequencia) {
            case "crescente":
                return this.listaCrescente();
                
            case "decrescente":
                return this.listaDecrescente();
                
                default:
        }

    }



    render() {

        const meteoritos = this.state.listaDeMeteoritos.map((meteorito) => {
            return (
                <Card key={"listaDeMeteoritos.id"}>
                    <p>{meteorito.imagem}</p>
                    <p>{meteorito.produto}</p>
                    <p>{meteorito.valor}</p>
                    <button>Adicionar ao carrinho</button>
                </Card>
            )
        });


        return (
            <ConteinerLoja key= {"conteinerLoja"}>
                <Cabecalho key={"cabecalho"}>
                    <h4 key={"texto"}>Quantidade de produtos: 2</h4>
                    <Selecionar key={"botaoOrdenacao"}>
                        <h5 key={"textoOrdenacao"}>Ordenação</h5>
                        <select key={"botaoSeletor"} value={this.state.sequencia} onChange={this.onChangeOrdenacao}>
                            <option value="crescente" onChange={this.state.listaOrdenada}>Crescente</option>
                            <option value="decrescente" onChange={this.state.listaOrdenada}>Decrescente</option>
                        </select>
                    </Selecionar>
                </Cabecalho>
                <DisplayProdutos key={"cardprodutos"}>
                    {meteoritos}
                    {this.state.sequencia}
                </DisplayProdutos>
            </ConteinerLoja>
        )
    }
}