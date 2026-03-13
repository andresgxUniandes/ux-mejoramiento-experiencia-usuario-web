# UX Mejoramiento Experiencia Usuario Web

Aplicación web para la gestión de alarmas (pulseAI), desarrollada con Angular. Incluye flujos de bienvenida, registro, login, explicación del producto y dashboard con alarmas.

## Tecnologías

- **Angular** 21
- **Tailwind CSS** 4
- **TypeScript** 5.9
- **Vitest** (tests)

## Requisitos previos

- **Node.js** 18+ (recomendado 20+)
- **npm** 11+

## Levantar en local

1. **Clonar el repositorio** (si aún no lo tienes):

   ```bash
   git clone <url-del-repositorio>
   cd ux-mejoramiento-experiencia-usuario-web
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Arrancar el servidor de desarrollo:**

   ```bash
   npm start
   ```

   O bien:

   ```bash
   ng serve
   ```

4. **Abrir en el navegador:**  
   [http://localhost:4200/](http://localhost:4200/)

   La app se recarga al guardar cambios en el código.

## Pantallas principales

| Ruta            | Descripción                          |
|-----------------|--------------------------------------|
| `/`             | Bienvenida (Ingresar / Registrarse)  |
| `/ingresar`     | Login (email y contraseña)           |
| `/registrar`    | Registro de usuario                  |
| `/como-funciona`| Cómo funciona pulseAI (post-registro) |
| `/dashboard`    | Dashboard con alarmas y resumen       |

## Scripts disponibles

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm start`    | Servidor de desarrollo         |
| `npm run build`| Build de producción            |
| `npm run watch`| Build en modo watch (dev)      |
| `npm test`     | Tests unitarios (Vitest)       |

## Estructura del proyecto

- `src/app/pages/` – Pantallas (welcome, login, register, como-funciona, dashboard)
- `src/theme/` – Sistema de colores y variables CSS
- `public/` – Assets estáticos (p. ej. `icon-user.svg`)
- `src/styles.css` – Estilos globales y fuente Baloo 2

## Build para producción

```bash
npm run build
```

Los artefactos se generan en `dist/`.

## Licencia

Ver archivo [LICENSE](LICENSE).
