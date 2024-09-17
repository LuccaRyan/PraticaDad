import './App.css'
import Section from './Components/Section/Section'

function App() {
  let itens1 = [
    {nome: "Item 1", imagem: "src/assets/carne1.png", preco: 10},
    {nome: "Item 2", imagem: "src/assets/carne2.png", preco: 20},
    {nome: "Item 3", imagem: "src/assets/carne3.png", preco: 30},
  ]
  let itens2 = [
    {nome: "Item 4", imagem: "src/assets/carne1.png", preco: 40},
    {nome: "Item 5", imagem: "src/assets/carne2.png", preco: 50},
    {nome: "Item 6", imagem: "src/assets/carne3.png", preco: 60},
  ]
  return (
    <>
      <Section titulo={"CLIENTE +"} subtitulo={"promo"} itens={itens1} cor={"red"}/>
      <Section titulo={"OUTROS"} subtitulo={"saudável"} itens={itens2} cor={"green"}/>
    </>
  )
}

export default App
