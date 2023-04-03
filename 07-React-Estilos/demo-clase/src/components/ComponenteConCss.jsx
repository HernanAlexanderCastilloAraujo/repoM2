// este componente tiene su propio css encapsulado en el objeto contenedorAzul
// se pierde el auto-complete de los estilos
// perdemos los pseudo-selectores


const contenedorAzul = {
    color: 'blue',
    backgroundColor: 'lightblue',
    border: '1px solid blue',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
}

const ComponenteConCss = () => {
    return (
        <div className="contedor" style={contenedorAzul} >
            <div>Parrafo</div>
            <div>Parrafo</div>
            <div>Parrafo</div>
            <div>Parrafo</div>
            <div>Parrafo</div>

        </div>
    );
}

export default ComponenteConCss;