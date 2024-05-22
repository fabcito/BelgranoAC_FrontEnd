El sitio Web cuenta de 6 páginas html;
1) index.html (Página de inicio)
2) plantel.html (Página que muestra los jugadores del club)
3) palmares.html (Página que muestra los trofeos del club)
4) historia.html (Página que resume la historia del club)
5) estadio.html (Página que muestra información del estadio del club)
6) contacto.html (Página que nos permite contactar al club)

Todas las páginas cuentan con un header en el que tenemos el logo, el nombre del club y los 3 logos de los sponsors principales 
y una nav bar con enlaces a todos los sitios. El logo del club es un enlace al incio y los logos de los sponsors son enlaces 
a los sitios web de dichas marcas.
Todas las páginas cuentan con un footer en el que tenemos los logos de las 5 redes sociales del club y un texto que dice "contactanos".
Los logos de las redes sociales nos redirigen a las redes sociales reales del club en el que nos basamos y "contactanos" es un boton que nos
redirige a contacto.html.

1) En index.html contamos con un carrousel con 3 noticias que ciclan, debajo de el tenemos un fixture y se nos muestra;
    Los proximos 5 encuentros (contra que equipo, en que competencia en que fecha y que ronda).
    Los últimos 5 encuentros (idem + resultado del partido).
    La tabla del Torneo local + la tabla de goleadores del torneo pasado + la tabla de asistidores del torneo pasado.
    La tabla del grupo de la Copa Libertadores + la tabla de goleadores + la tabla de asistidores.

2) En plantel.html contamos con un banner alusivo y debajo de este con 3 secciones en las que se nos muestran los jugadores del equipo,
divididos según a que línea pertenecen (Se hizo utilizando VUE y un JSON manufacturado por el grupo).

3) En palmares.html contamos con un banner alusivo y debajo de este con 3 secciones en las que se nos muestran los titulos del club,
divididos según su categoría (Se hizo utilizando VUE y un JSON manufacturado por el grupo).

4) En historia.html contamos con un banner alusivo y debajo de este un resumen de la historia del club, subdividido en etapas y contando
con una imagen para cada una de estas.

5) En estadio.html contamos con un banner alusivo y debajo de este se nos muestra;
    Un breve texto informándonos sobre el estadio.
    Una imagen del estadio con sus secciones divididas en colores y con una referencia aludiendo a la capacidad de cada una.
    Un breve texto informándonos sobre la próxima remodelación del estadio.
    Un iframe mostrándonos la localización del estadio real del club.

6) En contacto.html contamos con un banner alusivo y debajo de este se nos muestra;
    Un formulario de contacto a rellenar (validado con JS).
    Una cartilla de contactos del club, contándo con enlaces hacia la ubicación en maps si clickeamos en la dirección y hacia una ventana para
    redactar un correo electrónico si clickeamos en el email.