# React sample with Webpack 5 Module Federation

This example shows a basic host application loading remote components

For more information, visit the article explaining this workflow

- `app1` expose component for import by other apps.
- `app2` will import exposed component from `app1`

## How to run

Run `yarn` and `yarn start` inside each repo respectively. This will build and serve your apps on ports 3000, 3001

- [localhost:3001](http://localhost:3000/) (expose component for import)
- [localhost:3002](http://localhost:3001/) (will import exposed component)

Example referenced from https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote

## Demo
App1: http://demo-module-federation-app1.surge.sh/
App2: http://demo-module-federation-app2.surge.sh/
