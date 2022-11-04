# Front pagina web bodorrio

Proyecto front para la web de nuestra boda @fdojimenezromero @mdmperez

## Tecnología

El proyecto esta pensado para ser lo mas sencillo posible.

Utilizando la herramienta de desarroto [Vite](https://vitejs.dev/) y JavaScript Vanilla.

## Instalación 
Ejecutar el siguiente comando para la instalción de dependecias.

```node
npm install
```

Configuración para subir a PRO, ejecutar en consola:

```node
curl -sL https://firebase.tools | bash
```

Una vez instalado, ejecutar: 
```node
firebase login
```

Logarse con chrome y la cuenta de gmail personal.

## Servidor local

Para arrancar el proyecto en un servidor local utilizar

```node
npm run dev
```
Esto generará la carpeta **dist** con el proyecto listo para desplegar en producción.

## Compilación

Para generar el proyecto compilado para producción utilzar el comando

```node
npm run build
```
Esto generará la carpeta **dist** con el proyecto listo para desplegar en producción.

## Despligue

El despliegue del proyecto esta automatizado mediante MR a la rama main o utilizando el siguiente comando 

```node
npm run publish
```

Se desplegará en la [URL](wedding-642bc.web.app)