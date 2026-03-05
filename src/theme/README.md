# Sistema de colores

Variables del design system para usar en pantallas y componentes.

## Uso con Tailwind

Clases de utilidad generadas automáticamente:

- **Primary:** `bg-primary`, `text-primary`, `border-primary`, etc.  
  Y para contenedor/texto: `bg-primary-container`, `text-on-primary`, `text-on-primary-container`
- **Secondary:** `bg-secondary`, `text-on-secondary`, `bg-secondary-container`, `text-on-secondary-container`
- **Tertiary:** `bg-tertiary`, `text-on-tertiary`, `bg-tertiary-container`, `text-on-tertiary-container`
- **Error:** `bg-error`, `text-on-error`, `bg-error-container`, `text-on-error-container`
- **Surface:** `bg-surface`, `bg-surface-container`, `text-on-surface`, `text-on-surface-variant`, etc.
- **Outline:** `border-outline`, `text-outline`, `border-outline-variant`

## Uso en CSS/SCSS de componentes

```css
.mi-componente {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.card {
  background: var(--color-surface-container);
  color: var(--color-on-surface);
  border: 1px solid var(--color-outline);
}
```

## Nombres disponibles

| Token | Variable CSS |
|-------|--------------|
| Primary | `--color-primary`, `--color-on-primary`, `--color-primary-container`, `--color-on-primary-container` |
| Secondary | `--color-secondary`, `--color-on-secondary`, `--color-secondary-container`, `--color-on-secondary-container` |
| Tertiary | `--color-tertiary`, `--color-on-tertiary`, `--color-tertiary-container`, `--color-on-tertiary-container` |
| Error | `--color-error`, `--color-on-error`, `--color-error-container`, `--color-on-error-container` |
| Surface | `--color-surface`, `--color-surface-dim`, `--color-surface-bright`, `--color-surface-container`, `--color-surface-container-low`, `--color-surface-container-high`, etc. |
| Outline | `--color-outline`, `--color-outline-variant` |
