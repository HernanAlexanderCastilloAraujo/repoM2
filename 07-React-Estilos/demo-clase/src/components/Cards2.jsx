import styled from 'styled-components'
//para utilizar styled components hay que instalarlo con npm install styled-components
//y luego importarlo

// creamos un objeto que va a contener los estilos, en este caso contenedor, luego utilizamos estos objetos como tags para retornarlos en el componente

// tener en cuenta que estos estilos se pueden escribir en archvio comun y luego podemos importarlos a los componentes que los necesiten...
const Contenedor = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-araund;
background-color: antiquewhite;
padding: 1rem;
border: 1px solid black;
border-radius: 10px;
margin: 1rem;
gap: 1rem;
`
const Card = styled.div`
width: fit-content;
padding-left: 1rem;
padding-right: 1rem;
height: 10em;
background-color: blueviolet;
color: white;
border-radius: 10px;
`
const Cards2 = () => {
    return (
        <Contenedor>

            <Card>Esto es una card2!</Card>
            <Card>Esto es una card2!</Card>
            <Card>Esto es una card2!</Card>
            <Card>Esto es una card2!</Card>
            <Card>Esto es una card2!</Card>

        </Contenedor>

    )
}
export default Cards2