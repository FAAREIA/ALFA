# Alfa

Archivos base para empezar cualquier tipo de proyecto.

## CSS (SASS)
### Bibliotecas
Contiene el CSS de las bibliotecas utilizadas.

### Módulos
Cada módulo es un bloque de código CSS reutilizable a lo largo del sitio.

### Núcleo
Aquí se define la verdadera base del CSS.

### Pantallas
Aquí se define el CSS de cada pantalla. Si la pantalla es larga, lo recomendable es crear su carpeta y modulizarla.

### beta.scss
Contiene todos los includes y un espacio en donde poner ajustes de máxima urgencia.

### SASS - Compressed.bat
En usuarios de Windows, al ejecutar el archivo se generará el CSS minificado.

### SASS - Watch.bat
En usuarios de Windows, al ejecutar el archivo SASS ya estará atento a las actualizaciones.

## IMG
* El archivo "constante.svg" es un sprite de los iconos a utilizar en el sitio. Recuerden que hay multiples técnicas para incluir SVGs en un sitio, y si el SVG tiene degradé deben guardarlo como archivo individual y no incluirlo como un tag "symbol" en "constante.svg". Ésto es por un tema de crossbrowsing.
* El archivo "favicon.svg" no lo soporta casi ningun browser....por ahora.

## JS
* La carpeta "bibliotecas" contiene todos las bibliotecas a utilizar.
* El archivo "constante.js" esta planeado para poner todo código que se utiliza en todo el sitio.
* El archivo "input-file.js" es un código para poder estilizar un input[type="file"]

## HTML
El archivo "index.html" contiene la estructura madre de cualquier pantalla y adicionalmente tiene ejemplos de como maquetar un ".mensaje" y un ".input-file".

## Crossbrowsing
No soporta ni soportará IE8.
