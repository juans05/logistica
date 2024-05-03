# Gestión de Inventarios Serverless

## Descripción
Este proyecto implementa una API serverless para la gestión de inventarios en tiempo real. La solución está diseñada para soportar la creación, actualización y consulta de productos, simulando las operaciones básicas de una "dark store". El enfoque principal está en la velocidad y disponibilidad del servicio, utilizando AWS Lambda y otros servicios de AWS para asegurar una arquitectura escalable y eficiente.

## Características
- **Creación de Productos:** Permite añadir nuevos productos al inventario.
- **Actualización de Productos:** Modificación de detalles existentes de productos.
- **Consulta de Productos:** Visualización de todos los productos disponibles en tiempo real.

## Prerrequisitos
Antes de proceder con la configuración y despliegue del proyecto, asegúrate de tener instalado y configurado lo siguiente:

- **[Node.js](https://nodejs.org/)**: Entorno de ejecución para JavaScript.
- **[Serverless Framework](https://www.serverless.com/)**: Framework para construir y desplegar aplicaciones serverless.
- **[AWS CLI](https://aws.amazon.com/cli/)**: Herramienta para controlar los principales servicios de AWS desde la terminal de tu máquina.
- **Credenciales de AWS**: Configuradas localmente para autenticación. Consulta la [documentación de AWS](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) para configurar tus credenciales.

## Configuración inicial

### Clonar el repositorio

- **git clone https://github.com/juans05/logistica.git**
- **cd tu-repositorio**


### Configuracion

- **cd backend**.
- **npm install**.
- **npm install -g serverless**

### Configuracion AWS windows
Instalar aws Cli y agragar en el PATH.
Reiniciar su pc
Una vez instalado, puedes configurarlo ejecutando el siguiente comando en tu terminal:
 - aws configure
   
Este comando te pedirá que ingreses tu AWS Access Key ID, Secret Access Key, región y formato de salida. Estas credenciales te las proporciona AWS cuando creas un usuario IAM en tu cuenta de AWS.

Usa Serverless Framework para desplegar el backend en AWS. Asegúrate de estar en la carpeta del backend y ejecuta:
- serverless deploy --verbose

Ajusta las variables de entorno y otros parámetros necesarios en tu archivo de configuración, usualmente ubicado en  backend/src/config/aws.js

- const AWS_REGION = 'us-west-2';
- const API_BASE_URL = 'https://<api-id>.execute-api.<region>.amazonaws.com/dev';

dspues de hacer toda la configuracion necesaria
ejecutar este comando **npm test**

comenzara a ejecutar todos los test.

Luego levantar el servicio backend con ***npm start**

### Frontend 
- **cd fproductos**.
- **npm install**.
  
Luego instalar dependencias levantar el proyecto con **npm start**

## Adicional Frontend
Si el frontend necesita ser desplegado (por ejemplo, en un bucket de S3 como sitio web estático), ejecuta:
 - **npm run build**
 - **aws s3 cp build/ s3://tu-bucket-de-s3 --recursive**
