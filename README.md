# week-53

![Deploy](https://github.com/kangasta/week-53/workflows/Deploy/badge.svg)
![CI](https://github.com/kangasta/week-53/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/8b331c62af7569f73b62/maintainability)](https://codeclimate.com/github/kangasta/week-53/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8b331c62af7569f73b62/test_coverage)](https://codeclimate.com/github/kangasta/week-53/test_coverage)

Simple week calendar.

## Development

### Getting stared

To get development server running on your machine, run:

```bash
# Install dependencies and start dev server
npm install
npm run dev
```

### Before committing

Lint code by running `npm run lint`.

```sh
npm run build
```

Automatically format code by running `npm run format`.

```sh
npm run format
```

Unit-test the code with `npm test`.

```bash
# Unit test
npm test
# or
npm test -- --coverage
# to also get coverage analysis
```

Create production build by running `npm run build`.

```bash
# Build
npm run build

# Build with non-root public URL
echo 'PUBLIC_URL="/${path}"' > .env
npm run build
```

See [index.html](./src/index.html) and [navigate.ts](./src/Utils/navigate.ts) for how `PUBLIC_URL` is being used.
