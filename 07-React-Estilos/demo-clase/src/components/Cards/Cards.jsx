import style from './Cards.module.css';
const Cards = () => {
    return (
        <div className={style.contenedor}>
            <div className={style.card}>Esto es una card!</div>
            <div className={style.card}>Esto es una card!</div>
            <div className={style.card}>Esto es una card!</div>
            <div className={style.card}>Esto es una card!</div>
            <div className={style.card}>Esto es una card!</div>
        </div>
    )
}
export default Cards

// podemos ver que aunque se puede colocar la clase contenedor en el div como en componente "componenteModules" hay que volver a escribir los estilos para contenedor...