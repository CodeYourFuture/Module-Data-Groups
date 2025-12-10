# Using ESM with Node.js, Jest, and `jsdom`

## Node.js 

Node.js supports both CommonJS and ESM, with CommonJS being the default module system.

To use ESM, we can add `"type": "module"` to `package.json`, or we can name the JavaScript files
with `.mjs` file extension.

**Important**:
- Avoid mixing CommonJS and ESM in the same project. At CYF you should only use ESM.


## Jest

[Jest’s support for ESM](https://jestjs.io/docs/ecmascript-modules) is still experimental, and may require additional configuration to work correctly.

One way to execute Jest test script that uses ESM is to 

1. **Update the custom `test` script in `package.json`**:
```javascript
"scripts": {
  "test": "NODE_OPTIONS=--experimental-vm-modules jest"
}
```

**Note**: On Windows, use **`set`** instead
```javascript
"scripts": {
  "test": "set NODE_OPTIONS=--experimental-vm-modules && jest"
}
```


2. **Run a specific Jest test script using**: 

```
npm test -- <test_script_filename>
```

**Note**: The `--` is optional if you do not have arguments to be forwarded to the underlying 
`jest` command.


## `jsdom`

[**`jsdom`**](https://github.com/jsdom/jsdom), a pure-JavaScript implementation of DOM for 
use with Node.js, **does not yet support** `<script type="module">` tags in HTML.

Testing an ESM-based application with `jsdom` requires additional configuration and third-party tooling.