import React from "react"
import styled from "styled-components";
import Carrinho from "./Carrinho";


const ConteinerLoja = styled.div`
    width: 100vw;
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
    width: 100vw;
    border: 1px solid black;
    height: 100vh;
    flex-wrap: wrap;
`

const CarrinhoDiv = styled.div`
    border: 1px solid black;
    width: 15vw;
    height: 40vh;
    text-align: center;
`


export default class Loja extends React.Component {
    state = {

        itensNaLoja: "",
        sequencia: 1,
        filtro: "",
        precoMin: "",
        precoMax: "",
        carrinho:[ {
           quantidade: 1,
           item: 
            {id: 5,
            imagem:"",
            produto: 200.00,
            valor:"",
            comprado: true}
        }],

        listaDeMeteoritos: [
            {
                id: 1,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem1" width="100%" height="200" />,
                produto: "Pedra Lunar",
                valor: 202.57,
                comprado: false
            },
            {
                id: 2,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem2" width="100%" height="200" />,
                produto: "Meteorito Saturniano",
                valor: 402.03,
                comprado: false
            },
            {
                id: 3,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem3" width="100%" height="200" />,
                produto: "Pedaço de cometa",
                valor: 300.52,
                comprado: false
            },
            {
                id: 4,
                imagem: <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4054_ECA83EB40B0EB2BD.jpg?w=1024" alt="imagem4" width="100%" height="200" />,
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
        let produtoEscolhido= this.state.listaDeMeteoritos.filter((meteoros) => {
            return meteoros.id === event.target.value 
        })
        let estoque = 0; 
        let carrinhoDeCompras = this.state.carrinho.map((meteoro) => {
            if (meteoro.item.id === event.target.value){
                meteoro.quantidade++ 
                estoque++
            }
            return meteoro
        })


        if(estoque === 0 ){
            this.setState({ 
                carrinho: [{
                    quantidade:1,
                    item: produtoEscolhido [0]
                }]

            },()=> console.log(this.state.carrinho))
        }else {
            this.setState({
                carrinho:carrinhoDeCompras

            },()=>console.log(this.state.carrinho))
        }
    }
    carrinhoProduto = ()=>{
        return this.state.carrinho.map ((carrinho)=>{return (
            <Carrinho
            item = {carrinho} 
            funcao = {this.removerProdutoCarrinho}
            />
                
        )})
        

    }

    removerProdutoCarrinho = (event)=>{
        let produtoEscolhido = this.state.listaDeMeteoritos.filter((produto)=>{
            return produto.id === event.target.value
        })
        let carrinho = this.state.carrinho.filter((item)=>{
            return item.item.id !== event.target.value
        }) 
        this.setState({carrinho:[...carrinho]})
    }

    
    valorCarrinho = ()=>{
        let valorTotal = 0
        this.state.carrinho.map ((cesto)=>{
            valorTotal = (parseFloat(cesto.item.valor)*parseFloat(cesto.quantidade))+ valorTotal
         })
         return valorTotal 
    }



    render() {
        
        let carrinhoProduto = this.carrinhoProduto () 

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
                    <Card /* key={"card-produtos"} */>
                        <p /* key={"imagem"} */>{meteorito.imagem}</p>
                        <p /* key={"produto-meteoro"} */>{meteorito.produto}</p>
                        <p /* key={"produto-valor"} */>R$: {meteorito.valor}</p>
                        <button /* key={"addcarrinho"} */ value = {this.state.carrinho} onClick={this.atualizaCarrinho}>Adicionar ao carrinho</button>
                    </Card>
                )
            })
            
        return (
            <ConteinerLoja /* key={"conteiner-Loja"} */>
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

                <Cabecalho /* key={"cabecalho"} */>
                    <h4 /* key={"texto"} */>Quantidade de produtos: {meteoritos.length}</h4>
                    <Selecionar /* key={"botaoOrdenacao"} */>
                        <h5 /* key={"texto-Ordenacao"} */>Ordenação</h5>
                        <select  /* key={"botaoSeletor"} */ value={this.state.sequencia} onChange={this.onChangeOrdenacao}>
                            <option value={1}>Crescente</option>
                            <option value={-1}>Decrescente</option>
                        </select>
                    </Selecionar>
                </Cabecalho>

                <DisplayProdutos /* key={"display-produtos"} */>
                    {meteoritos}
                </DisplayProdutos>

                <CarrinhoDiv>
                <h4>Carrinho</h4>
                {carrinhoProduto}
                <p>valor total:<b>{this.valorCarrinho()}</b></p>
                </CarrinhoDiv>

            </ConteinerLoja>

        )    
    }
}