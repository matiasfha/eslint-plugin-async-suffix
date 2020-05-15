# eslint-plugin-async

Async plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-async`:

```
$ npm install eslint-plugin-async --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-async` globally.

## Usage

Add `async` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "async"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "async/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





