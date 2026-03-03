# Static assets

Place your CV and badge images here.

## CV download

Expected file name used by the app:

- `public/Mauricio-Lara-CV.pdf`

The download button in Hero uses this path automatically.

## Badge images

Recommended location:

- `public/badges/`

Then set `imageUrl` in `src/components/Skills.jsx` using the Vite base path, for example:

```js
imageUrl: `${import.meta.env.BASE_URL}badges/terraform-associate.png`
```
