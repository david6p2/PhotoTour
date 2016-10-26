# PhotoTour
App that Shows Photos Taken 10Km near from where you are

## Acerca de Photo Tour

Photo Tour es una aplicación creada para el Wayra Developer Day de Mayo del 2012.

### Descripción del Valor Agregado

La idea fue crear una aplicación que le sirva a los turistas cuando están en una ciudad que no conozcan, para que al abrirla en sus teléfonos móviles los geo localice y les muestre lugares de interés que se encuentren 10 Km a la redonda. Esto debido a que muchas veces cuando se viaja, especialmente en viajes de trabajo, la gente prefiere quedarse en el hotel pues comúnmente no conoce que lugares turísticos tiene cerca para poder visitar.

Aunque actualmente no esta funcionando con Geo localización, por temas de tiempo en el desarrollo, si se puede simular dando clic sobre diferentes puntos del mapa seguido de lo cual empezaran a aparecer las fotos de lugares cercanos.

### API usadas

Se utilizo el API de Google Maps para el Mapa y el API de Flickr para buscar Fotos y por medio de JSONP generar las URL de las imágenes de las primeras 5 fotos de lugares que se encuentren 10 km a la redonda de la ubicación marcada. Falto usar el API de Geo localización de HTML5.

### Lenguaje usado, librerías y frameworks

Esta aplicación fue creada usando HTML5, CSS3, JavaScript puro y también jQuery.
Como “Framework”, si así se puede llamar, se uso Twitter Bootstrap, que le permite adaptarse a cualquier dispositivo mediante responsive design.

### ¿Que se aprendió?

Mas allá de participar en el concurso de @WayraCo, fue de gran aprendizaje esta aplicación, especialmente en como tratar llamadas JSONP desde otros dominios.

### ¿Que queda pendiente?

Queda pendiente la geo localización, una autenticación por medio de alguna API de Facebook, Twitter, etc, Capacidad para poder puntuar las fotos, trazar ruta recorrida en el mapa y almacenarla por local storage o en alguna base de datos para su posterior consulta si se quiere saber por donde se anduvo en determinada ciudad. 
