Notes from Development
======================

Setup Typescript
----------------

- `yarn add -D typescript` or `npm install -D typescript` installs the typescript compiler
- `tsconfig.json` sets up typescript `tsc` compiler settings:
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "strictNullChecks": true,
        "baseUrl": ".",
        "paths": {
            "*": [
                "node_modules/*"
            ]
        }
    },
    "include": [
        "src/**/*"
    ]
}
```
- `yarn add -D tslint` to install the linter for typescript
- `tsling.json` configures the `tslint`er:
```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "trailing-comma": [true],
        "quotemark": [true, "single"],
        "semicolon": [true, "always"]
    },
    "rulesDirectory": []
}
```

Setup Automatic Server Updates with TS-Node & NodeMon
-----------------------------------------------------

- `yarn add -D nodemon ts-node`
- `touch nodemon.json`:
```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": { // [A]
    "ts": "node --require ts-node/register"
  },
  "watch": ["src/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```
- Tells nodemon to watch `src/*` for changes in server code
    - If this is for a frontend project you might want to seperate from client code tree
- Sets node env to "dev" which is used to specify development specific node settings while this is being used
- Specifies that changes to js, json, and ts files should spur restarts to node
- Make sure there's a script in `package.json` like:
```json
// ...
"scripts": {
    // ...
    "dev": "nodemon src/server.ts"
    // ...
}
// ...
```


Testing Sites
-------------

- 