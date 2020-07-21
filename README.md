# cap-web-components 
It's an light framework for web components development, supporting older browsers (IE11+). It is composed of an initial scaffolding and a [rollup](https://rollupjs.org/guide/en/) configuration for esm and umd modules generation.

[LitElement](https://lit-element.polymer-project.org/) is already installed an can be used out of the box.

## Requirements
This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and npm (v5.0.0+).

## Setup
Clone the project and install the dependencies:

```bash
git clone git@github.com:cap-web-components/cap-web-components.git
cd cap-web-components
npm i
```

## NPM Scripts

### `start`
Start a local development server on port `4200`.

```bash
npm start
```

### `test`
Run all unit tests and generate the coverage report. Unit tests are powered by Jest, for more information about how to implement them you can check their [docs](https://jestjs.io/docs/en/getting-started).

```bash
npm test
```

### `test:watch`
Start an inmersive unit test developer experience, it allows you to focus on a specific set of tests and listens for changes on the files to run them again.

```bash
npm test:watch
```

### `build`
Generate the vulcanized bundles in the `dist` folder. This command will generate a **esm** bundle to be used in modern browser that [support modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) and a **umd** bundle for browser that don't.

```bash
npm run build
```

This script generates an `index.html` file that includes all the bundles. You can use it as a reference to extract the bundles for other projects.

### `demo`
Start a [storybook](https://storybook.js.org/) demo server. By default it will add all files ending in `.stories.js` or `stories.ts` to the catalog.

```bash
npm run demo
```

### `demo:build`

Generate the static files that contain the catalog with all the demo cases. By default the output will be generated in a `catalog` folder.

```bash
npm run demo:build
```
