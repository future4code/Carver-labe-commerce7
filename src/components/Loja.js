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

        sequencia: "crescente",
        filtro: "",
        precoMin: "",
        precoMax: "",


        sequencia: "",


        listaDeMeteoritos: [
            {
                id: 1,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem1" width="180" height="200" />,
                produto: "Pedra Lunar",
                valor: "200,00"

            },
            {
                id: 2,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem2" width="180" height="200" />,
                produto: "Meteorito Saturniano",
                valor: "400,00"

            },
            {
                id: 3,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem3" width="180" height="200" />,
                produto: "Pedaço de cometa",
                valor: "410,00"

            },
            {
                id: 4,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem4" width="180" height="200" />,
                produto: "Meteorito Venusiano",
                valor: "320,00"
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
            case "decrescente":
                return this.listaDecrescente();
                
                default:
        }

    }


    updateFiltro = (event) => {
        this.setState({ filtro: event.target.value })
    }

    updatePrecoMin = (event) => {
        this.setState({ precoMin: event.target.value })
    }

    updatePrecoMax = (event) => {
        this.setState({ precoMax: event.target.value })
    }

    render() {
        const meteoritos = this.state.listaDeMeteoritos
            .filter(meteoros => {
                return meteoros.produto.toLowerCase().includes(this.state.filtro.toLowerCase())
            })
            .filter(meteoros => {
                return this.state.precoMin === "" || meteoros.valor >= this.state.precoMin
            })
            .filter(meteoros => {
                return this.state.precoMax === "" || meteoros.valor <= this.state.precoMax
            })
            .map((meteorito) => {
                return (
                    <Card key={"cardlistaDeMeteoritos"}>
                        <p>{meteorito.imagem}</p>
                        <p>{meteorito.produto}</p>
                        <p>{meteorito.valor}</p>
                        <button>Adicionar ao carrinho</button>
                    </Card>
                )
            });
        return (
            <ConteinerLoja key={"conteinerLoja"}>
                <input
                    placeholder="Filtro"
                    value={this.state.filtro}
                    onChange={this.updateFiltro}
                />
                <input
                    type="number"
                    placeholder="Preço Minimo"
                    value={this.state.precoMin}
                    onChange={this.updatePrecoMin}
                />
                <input
                    type="number"
                    placeholder="Preço Máximo"
                    value={this.state.precoMax}
                    onChange={this.updatePrecoMax}
                />

                <Cabecalho key={"cabecalho"}>
                    <h4 key={"texto"}>Quantidade de produtos: 2</h4>
                    <Selecionar key={"botaoOrdenacao"}>
                        <h5 key={"textoOrdenacao"}>Ordenação</h5>
                        <select  key={"botaoSeletor"} value={this.state.sequencia} onChange={this.onChangeOrdenacao}>
                            <option value="crescente" onChange={this.state.listaOrdenada}>Crescente</option>
                            <option value="decrescente" onChange={this.state.listaOrdenada}>Decrescente</option>
                        </select>
                    </Selecionar>
                </Cabecalho>
                <DisplayProdutos key={"cardprodutos"}>
                    {meteoritos}
                </DisplayProdutos>
            </ConteinerLoja>



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

    }

    onChangeOrdenacao = (event) =>{
        this.setState({sequencia: event.target.value})
    }

    listaCrescente = (event) => {
        const crescente = listaDeMeteoritos.sort((a,b)=>{
            return a.valor.localeCompare(b.valor)
        })
        this.setState({sequencia: event})
    }
    
    listaDecrescente = (event) => {
        const decrescente = listaDeMeteoritos.sort((a,b)=>{
            return b.valor.localeCompare(a.valor)
        })
        this.setState({sequencia: event})
    }

    render() {

        const listaOrdenada = (event) =>{
            switch (this.state.sequencia){
                case "crescente":
                    return this.listaCrescente()
                case "decrescente":
                    return this.listaDecrescente()
                }
            this.setState({sequencia: event})
        }
          
        return (
        <ConteinerLoja>
        <Cabecalho>
            <h4>Quantidade de produtos: 2</h4>
            <Selecionar>
                <h5>Ordenação</h5>
                <select value={this.state.sequencia} onChange={this.onChangeOrdenacao}>
                <option value = "crescente" onChange={this.state.listaOrdenada}>Crescente</option>
                <option value = "decrescente" onChange={this.state.listaOrdenada}>Decrescente</option>
                </select>
            </Selecionar>
         </Cabecalho>
            <DisplayProdutos>
            {meteoritos}
            {this.state.sequencia}
            </DisplayProdutos>
        </ConteinerLoja>

        )
    }
}