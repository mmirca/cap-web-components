# cap-web-components 
It's an light framework for web components development, supporting older browsers (IE11+). It is composed of an initial scaffolding and a [rollup](https://rollupjs.org/guide/en/) configuration for esm and umd modules generation.

[LitElement](https://lit-element.polymer-project.org/) is already installed an can be used out of the box.

## Requirements
This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and npm (v5.0.0+).

## Setup
Clone the project and install the dependencies:

```bash
git clone https://github.com/cap-web-components/mapfre-login.git
cd mapfre-login
npm i
```

## NPM Scripts

### `start`
Start a local development server on port `4200`.

```bash
npm start
```

### `build`
Generate the vulcanized bundles in the `dist` folder. This command will generate a **esm** bundle to be used in modern browser that [support modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) and a **umd** bundle for browser that don't.

```bash
npm run build
```

This script generates an `index.html` file that includes all the bundles. You can use it as a reference to extract the bundles for other projects.