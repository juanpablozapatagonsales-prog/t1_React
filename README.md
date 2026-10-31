# ✦ Nébula Gaming Systems ✦

> **Potencia para ir más allá.** Una experiencia web para explorar computadores gaming y conocer tecnologías modernas de React.

<p align="center">
  🎮 ASUS ROG · ASUS TUF Gaming · Lenovo LOQ 🎮
</p>

---

## 🪐 Descripción

**Nébula Gaming Systems** es una aplicación web desarrollada con React que presenta una selección de computadores gaming para jugar, estudiar y trabajar. Su página principal destaca las líneas ASUS ROG, ASUS TUF Gaming y Lenovo LOQ en una interfaz adaptable a distintos tamaños de pantalla.

El proyecto también incluye vistas de demostración para componentes, consumo de una API pública y formularios de acceso. Las pantallas de autenticación son demostrativas: no se conectan a un servicio de usuarios ni guardan información.

## 🚀 Características principales

- **Catálogo destacado:** tarjetas para ASUS ROG Strix G16, Lenovo LOQ 15 y ASUS TUF Gaming A15.
- **Carrusel interactivo:** navegación manual y cambio automático, con pausa al interactuar y respeto por la preferencia del sistema para reducir movimiento.
- **Navegación por rutas:** acceso a las distintas secciones sin recargar la página.
- **Demostración de props:** avatares reutilizables con diferentes datos y tamaños.
- **Consulta de API:** búsqueda paginada de personajes de Rick y Morty, con estados de carga y mensajes de error.
- **Vistas de autenticación:** formularios de inicio de sesión, registro y recuperación de contraseña, presentados como demostración visual.
- **Diseño adaptable y accesible:** componentes de Bootstrap, etiquetas accesibles y enlace para saltar al contenido principal.
- **Aplicación web progresiva (PWA):** manifiesto, iconos y precache de recursos generados durante la compilación.

## 🖥️ Interfaz gráfica

La interfaz utiliza una estética oscura con acentos azules y turquesa, tipografía en cursiva y componentes responsivos de **Bootstrap 5**.

| Vista | Ruta | Contenido |
| --- | --- | --- |
| Inicio | `/` | Presentación, carrusel y equipos destacados |
| Props | `/props` | Ejemplo de componentes reutilizables y props |
| API | `/api` | Búsqueda y paginación de personajes de Rick y Morty |
| Iniciar sesión | `/login` | Formulario demostrativo de acceso |
| Crear cuenta | `/registro` | Formulario demostrativo de registro |
| Recuperar contraseña | `/recuperar-contrasena` | Formulario demostrativo de recuperación |

> ℹ️ Las funciones de inicio de sesión, registro y recuperación requieren una integración de backend que todavía no está implementada.

## 🧩 Arquitectura del Proyecto

La aplicación separa el punto de entrada, el enrutamiento y los componentes por funcionalidad:

```text
project_1/
├── public/                         # Iconos, imágenes y recursos públicos
├── src/
│   ├── assets/                     # Recursos importados por la aplicación
│   ├── features/
│   │   ├── auth/components/        # Login, registro y recuperación
│   │   └── landing/components/      # Inicio, navegación, API y props
│   ├── App.jsx                     # Rutas, estructura compartida y carga diferida
│   └── main.jsx                    # Montaje de React y estilos de Bootstrap
├── index.html                      # Documento HTML y metadatos de la aplicación
├── vite.config.js                  # Configuración de Vite y PWA
└── package.json                    # Dependencias y comandos del proyecto
```

### 🛠️ Tecnologías

- **React 19** para la interfaz y el estado de los componentes.
- **React Router** para la navegación entre vistas.
- **Vite** para el servidor de desarrollo y la compilación.
- **Bootstrap 5** para estilos y diseño adaptable.
- **Axios** para consultar la API de Rick and Morty.
- **vite-plugin-pwa** para generar las capacidades PWA.

### ▶️ Ejecutar localmente

Necesitas tener **Node.js** y **npm** instalados.

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Comandos disponibles:

```bash
npm run build    # Generar la versión de producción en dist/
npm run preview  # Previsualizar la compilación local
npm run lint     # Revisar el código con Oxlint
```

La vista `/api` necesita conexión a internet para obtener los datos de [Rick and Morty API](https://rickandmortyapi.com/).

## 👨‍💻 Datos importantes del Autor

- **Autor:** Juan Pablo Zapata
- **Proyecto:** Nébula Gaming Systems
- **Tecnología principal:** React

---

<p align="center">
  ✨ Hecho para quienes buscan su próximo nivel de juego. ✨
</p>
