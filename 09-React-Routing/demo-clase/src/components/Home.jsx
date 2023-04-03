const Home = (props) => {
    //si se utilza la propiedad render, la funcion de render recibe un objeto con las siguientes propiedades (informacion extra del Router)
//console.log(props.unObjeto);
// history
// : 
// {length: 3, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}
// location
// : 
// {pathname: '/home', search: '', hash: '', state: undefined}
// match
// : 
// {path: '/home', url: '/home', isExact: true, params: {…}}
// staticContext
// : 
// undefined
// [[Prototype]]
// : 
// Object
    return (

        <div className="home">
          <h1>este es el componente home</h1>
          <h3>
            Estamos en la clase de routing - {props.name}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae.
          </p>
        </div>
    )
    

    

}

export default Home