# Apple Page with Next.js Admin API

This project now runs fully on Next.js. The storefront, the `app/admin` area, and the `/api/products` CRUD endpoints all live inside the Next app using App Router route handlers.

## Run the project

```bash
npm run dev
```

For production:

```bash
npm run build
npm run start
```

## Project structure

- `app/page.js` renders the storefront homepage.
- `app/components/home/*` contains homepage-specific UI.
- `app/components/catalog/*` contains reusable product catalog UI.
- `app/admin/*` contains the admin interface.
- `app/api/products/*` contains the product CRUD API.
- `data/products.json` stores the catalog content used by both the storefront and admin.

## Product API

Base URL:

```text
http://localhost:3000/api/products
```

Available endpoints:

- `GET /api/products` returns the full catalog.
- `GET /api/products?section=newArrivals` returns one section only.
- `GET /api/products/:id` returns a single product with its section.
- `POST /api/products` creates a new product.
- `PUT /api/products/:id` replaces a product.
- `PATCH /api/products/:id` updates part of a product.
- `DELETE /api/products/:id` deletes a product.

## Example create request

```json
{
  "section": "newArrivals",
  "name": "Apple Vision Pro",
  "price": "From $3,499",
  "href": "https://www.apple.com/apple-vision-pro/",
  "src": "https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/hero_endframe__b3cjfkquc2s2_large.jpg",
  "alt": "Apple Vision Pro",
  "width": 900,
  "height": 900,
  "imageClassName": "max-w-[150px] sm:max-w-[160px]",
  "panelClassName": "bg-white"
}
```

## Notes

- Product data is stored in `data/products.json`.
- The frontend still fetches from `/api/products`, so the homepage and admin area share the same Next.js API.
- A simple admin UI is available at `/admin/products` and `/admin`.
- The API updates `updatedAt`, `lastModifiedAt`, and `productCount` after every write.
