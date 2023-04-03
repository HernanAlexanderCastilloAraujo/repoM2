```javascript
```

ROUTING EN REACT..
Las apliaciones de react van a ser una single page aplicaction (SPA), al navegar vamos a estar decidiendo, qué mostrar y qué no mostrar...
La libreria que se utiliza para definor de forma declarativa las vistas que qeremos renderizar es react router.... 
Estamos acostumbrados a que nuestro componente padre sea app, sin embargo ahora habrá un componente antes, que será el componente Router...

El objeto DOM window proporciona acceso al historial del vavegador a través del objeto history, este da acceso a métodos y propiedades útilies que permiten avaqnzar y retroceder a través del historial del usuario, así como manipular el contenido del historial...

Antes la configuración de Routing se hacía por medio de HashRouting...

```javascript

<Route
exact
strict
sensitive
path=""
component={Component}
render={() => <Component/>}
childre={() => <Componente/>}
>
// propiedades que puede tener el comopnente <Route/>
</Route>
```