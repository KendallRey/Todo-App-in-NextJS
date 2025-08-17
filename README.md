This is a [Next.js](https://nextjs.org) Todo List using Tailwind, Zustand, React Query.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Notes
- I initially used MUI components, but migrated to tailwind component. (not sure about the requirements but components are there, you can take a look)
- No environment variables aside from `NEXT_PUBLIC_APP_URL` used in `metadataBase` with fallback of `http://localhost:3000`
- Added some console logs for API responses, see console
- Other packages I used:
  - Axios
  - Zod (for validations & schema types)
  - React Query for Fetching, (Create, Update)
    - server actions for mark as done (update) and delete
  - Next-Themes for theme
  - Notistack for toast / snackbar
  - Zustand (w/ immer) for state management

# Optimization
## Start optimization here, run command
```bash
ANALYZE=true npm run build
```
