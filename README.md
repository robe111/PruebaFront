Esta aplicación consta de un login

Maneras de inicializar el proyecto
ng server
ng test

//////////////////////////////////////////////////////////

# Prueba Front

Dado el siguiente diseño:

1. Maquetar usando HTML5 y SCSS como preprocesador de CSS. El diseño ha de ser aproximado no se va a valorar si el margen mide 8px en lugar de 5px si no que exista el margen

2. La Validación del formulario será obligatorio que ambos inputs estén cumplimentados, uno será tipo email con validación email y otro password cuya validación será que al menos deberá de tener 5 caracteres. El reminder del formulario, será un switch de tipo booleano y opcional.

3. El botón de aceptar siempre estará activo pero al pulsarlo la primera vez si el formulario está mal cumplimentado se mostraran los mensajes de error, en caso de estar correctamente cumplimentados con poner un console.log(‘OK’) será suficiente

4. Para los iconos usar la librería que viene en Ionic o cualesquiera, el objetivo no es el diseño del icono si no su correcta maquetación.

5. Realizar el diseño responsive con el breakpoint en 960px.

6. Se valorará positivamente la creatividad (por ejemplo añadir alguna animación)

7. Test unitarios, E2E y componentes. Se valorará el uso de test unitarios, E2E y componentes

8. Inicialización del proyecto.

   Bastará con inicializar un proyecto en blanco mediante el CLI de Ionic o el CLI de Angular dependiendo del puesto si es web o mobile.

   Mobile:

   `ionic start test_app blank`

   Web:

   `ng new test_app`

# Consideraciones adicionales

Es importante que se haga hincapié en los siguientes puntos:

- Crear un fork privado del proyecto.
- Commit hechos sobre repositorio. No hacer un commit final. Debe ir subiendo según tenga los trabajos realizados. Ejemplo: proyecto inicial, implementación de controller, implementación de servicios, test unitarios, etc...
- Test Unitarios, es importante que haya una correcta cobertura de tests.
- Generar un nuevo readme inicial de repositorio.
