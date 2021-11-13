import React from "react"
import styled from "styled-components";




const ColunaFiltros = styled.div`
display:flex;
flex-direction:column;
background-color: rgb(200, 150, 76,0.3);
color:white;
align-items:center;
padding:10px;
gap:10px;
font-size:20px;

`

const ConteinerLoja = styled.div`
   display:grid;
   grid-template-columns: 0.3fr 3fr 1fr;
   background-image: url("https://conhecimentocientifico.r7.com/wp-content/uploads/2020/03/estrelas-o-que-sao-caracteristicas-tipos-as-diferencas-e-curiosidades.jpg");
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    border: 1px solid black;
    width: 30%;
    text-align: center;
    margin:1%;
    align-items:center;
    background-color:grey;
    border-radius: 10px;
    justify-content:space-between;
    font-size:20px;
    padding-bottom:2px;
    
`
const DisplayProdutos = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background-color: rgb(200, 10, 400,0.3);
    border-radius: 10px;
    margin: 20px
`

const CarrinhoDiv = styled.div`
    border: 1px solid black;
    text-align: center;
    background-color: rgb(200, 150, 76,0.3);
    color:white;
`


export default class Loja extends React.Component {
    state = {

        itensNaLoja: "",
        sequencia: 1,
        filtro: "",
        precoMin: "",
        precoMax: "",
        carrinho: [{
            quantidade: 1,
            item:
            {
                id: 5,
                imagem: "",
                produto: 200.00,
                valor: "",
                comprado: true
            }
        }],

        listaDeMeteoritos: [
            {
                id: 1,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem1" width="90%" height="100%" />,
                produto: "Pedra Lunar",
                valor: 202.57,
                comprado: false
            },
            {
                id: 2,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem2" width="90%" height="100%" />,
                produto: "Meteorito Saturniano",
                valor: 402.03,
                comprado: false
            },
            {
                id: 3,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem3" width="90%" height="100%" />,
                produto: "Pedaço de cometa",
                valor: 300.52,
                comprado: false
            },
            {
                id: 4,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem4" width="90%" height="100%" />,
                produto: "Meteorito Venusiano",
                valor: 210.89,
                comprado: false
            },
            {
                id: 5,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem5" width="90%" height="100%" />,
                produto: "Meteorito Venusiano",
                valor: 210.89,
                comprado: false
            },
            {
                id: 6,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem6" width="90%" height="100%" />,
                produto: "Meteorito Venusiano",
                valor: 210.89,
                comprado: false
            },
            {
                id: 7,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem7" width="90%" height="100%" />,
                produto: "Meteorito Venusiano",
                valor: 210.89,
                comprado: false
            },
            {
                id: 8,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem8" width="90%" height="100%" />,
                produto: "Meteorito Venusiano",
                valor: 210.89,
                comprado: false
            },
            {
                id: 9,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem9" width="90%" height="100%" />,
                produto: "Meteorito Venusiano",
                valor: 210.89,
                comprado: false
            },
        ]
    }

    onChangeOrdenacao = (event) => {
        this.setState({ sequencia: event.target.value })
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

    atualizaCarrinho = (event) => {
        let produtoEscolhido = this.state.listaDeMeteoritos.filter((meteoros) => {
            return meteoros.id === event.target.value
        })
        let estoque = 0;
        let carrinhoDeCompras = this.state.carrinho.map((meteoro) => {
            if (meteoro.item.id === event.target.value) {
                meteoro.quantidade++
                estoque++
            }
            return meteoro
        })


        if (estoque === 0) {
            this.setState({
                carrinho: [{
                    quantidade: 1,
                    item: produtoEscolhido[0]
                }]

            }, () => console.log(this.state.carrinho))
        } else {
            this.setState({
                carrinho: carrinhoDeCompras

            }, () => console.log(this.state.carrinho))
        }
    }
    carrinhoProduto = () => {
        return this.state.carrinho.map((carrinho) => {
            return (
                <div
                    item={carrinho}
                    funcao={this.removerProdutoCarrinho}
                />

            )
        })


    }

    removerProdutoCarrinho = (event) => {
        let produtoEscolhido = this.state.listaDeMeteoritos.filter((produto) => {
            return produto.id === event.target.value
        })
        let carrinho = this.state.carrinho.filter((item) => {
            return item.item.id !== event.target.value
        })
        this.setState({ carrinho: [...carrinho] })
    }


    valorCarrinho = () => {
        let valorTotal = 0
        this.state.carrinho.map((cesto) => {
            valorTotal = (parseFloat(cesto.item.valor) * parseFloat(cesto.quantidade)) + valorTotal
        })
        return valorTotal
    }



    render() {

        let carrinhoProduto = this.carrinhoProduto()

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
            .sort((meteoros1, meteoros2) => {
                return this.state.sequencia * (meteoros1.valor - meteoros2.valor)
            })
            .map((meteorito) => {
                return (
                    <Card >
                        <p >{meteorito.imagem}</p>
                        <b><p >{meteorito.produto}</p></b>
                        <p >R$: {meteorito.valor}</p>
                        <button value={this.state.carrinho} >Adicionar ao carrinho</button>
                    </Card>
                )
            })
        return (
            <ConteinerLoja >
                <ColunaFiltros>
                    <b>Busca</b>
                    <input
                        placeholder="Produto"
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
                    <b>Ordem</b>
                    <select value={this.state.sequencia} onChange={this.onChangeOrdenacao}>
                        <option value={1}>Crescente</option>
                        <option value={-1}>Decrescente</option>
                    </select>
                    <b>Quantidade de produtos: {meteoritos.length}</b>

                </ColunaFiltros>
                <div>

                    <DisplayProdutos /* key={"display-produtos"} */>
                        {meteoritos}
                    </DisplayProdutos>
                </div>
                <CarrinhoDiv>
                    <h4>Carrinho</h4>
<img src="http://wmgassistenciatecnica.com.br/wp-content/uploads/bb-plugin/cache/manutencao-1-landscape.png" alt="manutenção" width="250px" />
<h4> Desculpe pelo transtorno, estamos em manutenção</h4>
                    
                </CarrinhoDiv>

            </ConteinerLoja>

        )
    }
}