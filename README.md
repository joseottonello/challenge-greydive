# Distribucion de Componentes
A modo de guia y tomando de refencia la pantalla al iniciar el proyecto, los componentes se encuentran distribuidos de la siguiente manera:

En el archivo `App`, se encontrara el archivo general desde donde se realiza la importacion del archivo JSON con los datos, se almacena en un estado mediante la utilizacion del hook useState y con el uso de propiedades se envia al resto de los componentes.
Tambien se encuentra el gestor de rutas de React Router.

En la carpeta `container`, se encuentra el archivo `Container` donde se encuentra el texto principal a modo de referencia y el mapeo correspondiente a la iteracion del archivo JSON.

En la carpeta `custom` se encuentran dos archivos, uno es `Card` donde se encuentra el desarrollo y la estilizacion de las tarjetas que se ven en la pantalla principal al iniciar la pagina y otro archivo llamado `Header` que contiene enlaces de redireccionamiento en la segunda etapa de la pagina.

Por ultimo, en la carpeta `itemContainer` se encuentran el archivo `Item` el cual contiene los datos de las tarjetas que se mostraran en la segunda etapa de la pagina.

# Librerias utilizadas

Para la estilizacion de mis componentes utilice la libreria [Tailwind CSS](https://tailwindcss.com/) la cual me parecio la mas practica y rapida para la ocasion.

Y para crear rutas dinamicas utilice la libreria [React Router](https://reactrouter.com/en/main/) para evitar recargar la pagina y ofrecer una visualizacion mas eficiente.

# Deployment
[Greydive Challenge](https://challenge-greydive-nine.vercel.app/)
