# Administración de Somos Arte Libre

Esta versión deja preparado el sitio para que las fotografías puedan cambiarse desde un panel de administración usando **Decap CMS + Netlify Identity + Git Gateway**.

## Cómo funcionará una vez publicado

1. El sitio se publica desde un repositorio GitHub en Netlify.
2. Se activa Netlify Identity y Git Gateway.
3. Se invita al correo del administrador.
4. Se entra a `https://TU-DOMINIO/admin/`.
5. En **Sitio web → Fotografías y logos** se puede cambiar cualquier imagen.
6. Al publicar, el CMS guarda el nuevo archivo en el repositorio y Netlify vuelve a desplegar el sitio.

La configuración del CMS está en `admin/config.yml` y las rutas de imágenes editables en `content/site.json`.

> Esta carpeta ya está preparada, pero el panel no puede publicar cambios reales hasta conectar el proyecto con un repositorio y un hosting (por ejemplo GitHub + Netlify).
