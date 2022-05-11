# Desafío "Formulario LogIn". 

Este proyecto se encuentra realizado utilizando JS, NodeJS, express, express-handlebars, express-session, sockets.io y bootstrap, entre otras.

Al ingresar a la ruta localhost:8080 te vas a encontrar con el formulario de login.
En usuario admin es el unico con acceso. User: pepe y Password: pepepass
Al hacer login ingresa al landing de productos, se puede ver el nombre del user en el margen superior de la pagina junto a un boton de logout. El admin puede agregar productos y mensajes en el chat.

## Consideraciones generales

El proyecto corresponde al desafío de la clase 24 del curso de Back End en Coderhouse.

El nombre del usuario en los saludos NO esta hardcodeado sino que se obtiene a traves de socket desde una variable pusheada con req.session.user.

#### `Acerca de mi`

Mi nombre es Francisco González, tengo 42 años y en la actualidad me encuentro estudiando en Coder para ser desarrollador Full Stack. 

Me pueden contactar a través de mi email: [fmgarg@gmail.com](mailto:fmgarg@gmail.com) y/o por whatsapp: +549 11 5412 2848.