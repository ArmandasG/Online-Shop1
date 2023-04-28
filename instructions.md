## eslint install

1. `npm install vite-plugin-eslint eslint eslint-config-react-app --save-dev`
2. eslint > `{"extends": ["react-app"}`
3. vite.config.js >> import eslint from 'vite-plugin-eslint';
4. vite.config.js >> plugins: [react(), eslint()],

#React router

https://www.npmjs.com/package/react-rouer - npm
https://reactrouter.com/en/main/ - docs

1. `npm i react-router-dom`
2. prideti BrowserRouter i main.jsx `import { BrowserRouter } from 'react-router-dom';`
3. susikurti Routes ten kur bus generuojami koponentai