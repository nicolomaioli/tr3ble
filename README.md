# tr3ble

A microblogging platform to test the waters with [t3](https://create.t3.gg/).

## Dev

Note:

- This configuration uses a separate shadow database in dev to reflect prod,
  see [About the shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database).
- We use Prettier for formatting, ensure your editor is setup correctly.

```sh
npm i
docker compose up -d
npm run dev
```
