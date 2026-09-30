# READme del proyecto

## descripción
La siguiente es una página web catálogo para la empresa FIREMED, que contendrá 50 productos y datos de la empresa que seran renderizados en htmls

### implementación inicial

0. crear repositorio en GitHub
1. abrir carpeta local
2. dentro del cmd colocar: [git init]
3. colocar tambien: [git clone https://github.com/sebaszapata9/web-firemed-v1.git]
4. utilizar carpeta como carpeta de proyecto
5. crear entorno virtual: [python -m venv venv_firemed]
6. activar entorno virtual: [venv_firemed\Scripts\activate.bat]
7. instalar django: [python -m pip install Django]
8. crear proyecto: [django-admin startproject firemed_web .]
9. crear app: [python manage.py startapp catalogo]
10. abrir terminal en VSC
11. activar app en settings


### copiar archivos de demo base

1. app/admin.py
2. app/models.py - tenemos que editar este archivo y adaptar algunas cosas
3. app/urls.py
4. app/views.py

### crear base postgresql

1. instalar psycog: [pip install psycopg2-binary]
2. ingresar a pgadmin y crear base: catalogo_db_firemed
3. configurar base de datos en settings

### correr migración y registrar data de firemed y primeros items

1. instalar Pillow: [python -m pip install Pillow]
2. correr [python manage.py makemigrations]
3. correr [python manage.py migrate]
4. crear super user
5. ingresar a panel admin y crear datos

### copiar templates y validar buen renderizado

1. copiar toda la carpeta templates y static de archivo demo
2. modificar colores del css a colores de marca firemed (#e60000 y #24a803)
3. incorporar nuevos modelos en la lógica de negocio del sitio web
4. validar que el producto cargado se ve correctamente

## pasos a seguir


## Sistema visual DITEL

- Todos los estilos compartidos están en `catalogo/static/css/styles.css`, con una única definición de variables en `:root`.
- Manrope se sirve desde `catalogo/static/fonts/manrope-variable.woff2`, con precarga en `base.html` y licencia SIL OFL incluida. No requiere conexión a Google Fonts.
- Azul `#000861` y azul profundo `#040036`: marca, títulos y fondos. Naranja `#D74E09`: acentos. Naranja `#B94008`: botones con texto blanco. Verde `#146C43`: acciones principales de WhatsApp y disponibilidad.
- El menú móvil se controla desde `catalogo/static/js/navigation.js` e incluye cierre con Escape y al regresar al tamaño de escritorio.
- Después de desplegar los cambios, ejecutar `python manage.py collectstatic --noinput` para publicar CSS, JavaScript y tipografía mediante WhiteNoise.
