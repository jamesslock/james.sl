# Unroll.Me Isomorphic Brochure Site
Universal and interoperable React , component-specific CSS.

## Features

- All the great stuff from [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) including:
  - Simple koa server for universal rendering
  - ES2015 + ES7 love with Babel
  - Hot Module Reload
- A webpack build process that transpiles ES6 for us
- A server that can be started with `npm run watch`
- Universal routes that work client- and server-side
- Hot reload for dat no-refresh swag
- Heroku-ready for production deployment (almost, needs work)
- Automatic gzip on server
- Component-specific, namespaced CSS
- Lost Grid support because it just makes sense
- Global CSS examples for sharing variables and modifiers between components

### Separation and structure
Semi-opinionated structure for separating Components into app-specific, site-specific and global folders. Can be rearranged however you like.

- A `src/components` folder, using atomic folder structure with `atoms`, `organisms`, `molecules`, and `pages`. See [Atomic Components](https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f#.n91w6w9dy) for a great about.
- A `src/containers` folder which holds the sites `Container`, allowing for global page layouts and `routes.js`
- A `src/global` folder which holds CSS files that get exposed to the global scope

### Helpers and libs
Libraries, loaders and love. Some coded into the app; lots of external ones to enhance our dev environment.

- `src/global/helpers.css` – A collection of modifiers that you can import for use as `className`s in any component; things like adding/collapsing padding, making fonts bigger etc.
- `src/global/variables.css` - A load of variables that get exposed to root scope and can be referenced in any component-specific CSS file.
- Webpack – Every JS developers new [favourite bundler](https://github.com/webpack/webpack). Webpack glues everything together for us; lets our loaders and plugins work together, transpiles our JS and CSS, runs our server, gives us hot reload… it’s the real MVP.
- LostGrid – An [absolutely awesome](https://github.com/peterramsing/lost), highly-usable grid system that makes life okay again
- PostCSS - An also [absolutely awesome](https://github.com/postcss/postcss) CSS tool, does lots of the heavy lifting (thanks to a few dope plugins) such as auto-prefixing our CSS, transpiling future syntax and, most importantly for this kit, namespacing and compiling our component-specific CSS.

## CSS
We're using PostCSS, atomic component structure with CSS Modules compiled to namespaced classes to learn more checkout Glen Maddern’s article on [Interoperable CSS](http://glenmaddern.com/articles/interoperable-css)

In short: you write CSS that is specific to a component. This CSS gets automatically namespaced for that component and rarely gets used elsewhere.

It doesn’t stop you writing ‘global’, non-namespaced CSS, and it definitely doesn’t remove the need for global-scoped styles and variables; it just means:

- You rarely have to mangle the cascade to override styles you’ve already set
- Your components have their own styles so you’re not combing through selectors to find the one line you need to change to make something red instead of blue.
- Small components are as portable as you want them to be, as their CSS is always ‘just enough’ to style the component
- Your CSS classes becomes close-to-immutable without having to maintain your namespacing yourself
- You don’t have to keep thinking of creative things to name your ‘sub’ component classes because some other component is using that class. E.g. you can have a `.primary` selector in a `Button` component that is totally different to a `.primary` selector in a `Hero` component.

## Static files
If you need to add any static files like images etc. and don’t want to deal with Webpack loaders or anything silly, the `static` folder acts as a root folder when you watch locally or deploy to production, so just chuck your files in there.

## Installation
Clone the repo then:

I highly recommend running node 5.0 for this project `nvm use 5.0` before running `npm install`

```bash
npm install
npm run watch
```

## Usage
Run `npm run watch` in terminal.

## Production
If you want to test for production:

```bash
npm run build
npm run start
```

or if you ever need to explicitly set the Node env:

```bash
npm run build
NODE_ENV=production node --harmony dist/server.js
```

## Deployment
*Needs work* – I’ve tested Heroku deployment and fixed any issues I’ve encountered, although it’s far from robust in terms of production checks.

Heroku will automatically run any postinstall tasks in `package.json` and run `npm start` afterwards. Currently the only postinstall task is `npm run build` which will build any static files. This means Heroku will mimic the `npm run build && npm run start` tasks used for local production checks.
