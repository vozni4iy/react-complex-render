# React + TypeScript + Vite complex render example

## Overview

### Description

This project is done to demo a code style and main principles of my work.
For now, it renders a dynamic both vertical and horizontal scrolled daily tv program (and how react handles this complex render). The project is flexible to contain more features in future.

### Main points

- a typical modular project structure
- use linter, prettier and trivago import order for better dev UX
- use vite as it has better performance and less bundle size vs webpack
- use sass for styles to be compiled at build time (for faster render)
- use zustand for simple and lightweight store
- use luxon as more modern date handling lib vs moment
- use css modules inside components for unique classnames
- use nodejs script to generate channels shown in react
- use random words lib to create program names and description
- use DALL_E to create images for tv program avatars

## Scripts

```sh
npm install
```

to install all dependencies

```sh
npm run generate-channels ARG
```

if you want to generate another channels shown in react. ARG could be a number of channels generated or undefined (5 ones will be generated then)

```sh
npm run dev
```

start the project

```sh
npm run lint
npm run format
```

use linter and prettier for better dev experience

```sh
npm run build
npm run serve
```

create a production build and serve it locally
