# week-53

[![Build Status](https://travis-ci.org/kangasta/week-53.svg?branch=main)](https://travis-ci.org/kangasta/week-53)
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

The code is unit tested with:

```bash
# Unit test
npm test
# or
npm test -- --coverage
# to also get coverage analysis
```

To create production build:

```bash
# Build
npm run build

# Build with non-root public URL
echo 'PUBLIC_URL="/${path}"' > .env
npm run build
```

See [index.html](./src/index.html) and [navigate.ts](./src/Utils/navigate.ts) for how `PUBLIC_URL` is being used.
