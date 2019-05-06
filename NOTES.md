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

Axios & Cheerio for the Bulk of Scraping Work
---------------------------------------------

- `yarn add axios cheerio && yarn add -D @types/cheerio`
    - axios has types in its regular repo
    - cheerio has a repo exported from the definitely typed monorepo 




Testing Sites
-------------

- [Medium - A refeerence to this project][10]
- [nixcraft][11] 
- [traefic docs][12]

References
----------

- [Medium - Bitsrc - Perform Web Scraping on Node][10]
- [nixcraft - Bash Shell See All Exported Variables and Functions][11]
- [Traefik Docs - Overview][12]

[10]: https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb "Medium - Bitsrc - Perform Web Scraping on Node"
[11]: https://www.cyberciti.biz/faq/linux-unix-bash-shell-see-all-exported-variables-and-functions/ "nixcraft - Bash Shell See All Exported Variables and Functions"
[12]: https://docs.traefik.io/ "Traefik Docs - Overview"