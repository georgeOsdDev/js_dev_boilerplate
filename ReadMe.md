# Javascript library development boilerplate

This is a boilerplate project for quick start javascript library development.

## How to Development

Install Node.js and NPM.

```bash
git clone git://github.com/georegeosddev/mylib.git
cd mylib
npm install
npm run-script build
```

## How to test

* Run command line test.

  ```bash
  gulp test
  ```

* Run browser test.

  open `test/index.html` by Browser


* Run headless test.

  ```bash
  zuul --local 8080 --ui mocha-bdd -- test/test.js
  ```

  See also [Zuul Quickstart](https://github.com/defunctzombie/zuul/wiki/Quickstart)

## How to setup Travis.ci

## How to setup Sauce Labs.

## How to publish to NPM

## How to publish to bower



## Licence
MIT
