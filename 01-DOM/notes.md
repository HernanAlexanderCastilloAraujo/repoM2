```javascript
```
```html
```

//********************************************************** //

DOM: cuando el código comienza a ser interpretado, se crea el DOM(Document Object Model), es un objeto que representa el código html escrito, representa la estructura del código html...

CSSOM: refiere los estilos que están definidos para la estructura del código html... 

A partir de los elementos anteriores se forma el render Tree que no es más que un objeto que representa todo aquello que va a ser pintado en la pantalla... este tiene una estructura muy similar a la de un árbol...

Layout: en pocas palabras es el marco donde se va a pintar la información...

¿Cómo se construye una página web? 
 => 1.Construcción del DOM
 => 2.Construcción del CSSOM
 => 3.Ejecución de javascript
 => 4.Creación del Render Tree
 => 5.Generación del Layout
 => 6.Painting

un DOM es la representacion de la estructura HTML como estructura de árbol

El CCSOM tanbien tiene estructura de arbol, por lo que si un element tiene un css definido como font-size: 18px, sus hijos tambien van a tener esté atributo por defect, aunque se puede modificar desde cada uno de los elementos 

Luego de creado el CSSOM se ejecuta javascript, este bloquea el parseo del DOM, cuando el parser llega a un tag <script/> frena para poder traer ese recurso y ejecutarlo, por eso cuando agregamos scrips de JS, se hace, generalmente, al final del documento HTML...

Luego el render tree solo se forma con lo que se va a ver en la pantalla...

Luego el layout determina el tamaño de la pantalla...
El layout es lo que determina el vewport

el viewport se puede configurar a través del tag meta viewport

<meta name="viewport" content="width=device-width, initial-scale=1">
scale se refiere al la escala respecto al tamaño de la pantalla

DOM API: es una serie de metodos y utiliades para interectuar con el DOM, notar que con el DOM API no se puede afectar al documento html...
En el navegador se puede acceder al DOM con la notación "document." este document es un objecto de JS con la que se puede trabajar...
Modificar el document se asemeja a modificar la la pantalla del navegador en timpo real 

MEDOTOS DE DOM API
```javascript
// selector getElement
documet.getElementById
document.getElementsByClass
document.getElementsByTagName
// puede ser getElement o getElements si son uno o varios elementos los que se quieren indentificar



//La propiedad innerText nos permite cambiar el contenido de texto de un elemento de texto o consultar su valor. A diferencia de innerHTML si le asignamos un string que contiene en su interior etiquetas HTML..
<div id="test"> Warning: This element contains <code>code</code> and <strong>strong language</strong>. </div>
var x = document.getElementById('test');
x.innerHTML // => " // => Warning: This element contains <code>code</code> and <strong>strong language</strong>. // => "

x.innerText class="hljs-comment">// => "Warning: This element contains code and strong language."

//selector query Selector
document.querySelectorAll("p") //selecciona todos los elementos de tipo parrafo
document.querySelectorAll(".clase1") //para seleccionar por clase se debe escribir un punto antes de la clase
document.querySelectorAll("#parrafo")// para seleccionar por tag


```

EVENTOS
Un evento es una señal de que algo sucedió, todos los nodos del DOM pueden generar estas señales...
Un Event Listener es el encargado de escuchar esas señales y hacer algo...
Un clic o presionar una tecla es un evento...

```javascript
const p1 = document.querySelector("#parrafo1") // selecciona el elemento con el id "parrafo1"
p1.addEventListener("click",fucntion(){
    console.log("me hicieron click")
})
```


