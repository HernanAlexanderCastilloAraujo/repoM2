```javascript

```

REACT REDUX

Componentes presentacionales vs containers
los componentes presentacionales solo muestran informacion (componentes Dumb), los containers generalmente tienen la lógica de como funcionan las cosas (componentes smart)...

Los componentes smart por lo general no tienen estilos, provee datos e invoca las acciones, en cambio los Dumb presentan como se ven las cosas, trabajan con sus propias props y generalmente no tienen estado propio (Algunos sí)...

Separar los componentes de esta manera trae varias ventajas, separa los problemas de lógica de lo presentacional, obtenemos componentes reutilizables(generamente los presentacionales), localizamos la complejidad en los containers...

componentes presentacionales
1. Proposito: como se ven las cosas, (markup, estilos)
2. sabe de redux: NO!
3. para leer datos: lee props
4. Para cambiar datos: invoca callbacks de sus propias props

componentes containers
1. Proposito: como funcionan las cosas, (traer estados, actualizar estados)
2. sabe de redux: SÍ!
3. para leer datos: se suscribe a los estados de REDUX
4. Para cambiar datos: envía acciones a redux
