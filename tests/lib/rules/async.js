const rule = require("../../../lib/rules/async");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 8 } }); // ecmaVersion 8 === 2017;

ruleTester.run("async function naming", rule, {
  valid: [
    {
      code: "function foo(){}"
    },
    {
      code: "async function fooAsync(){}"
    }
  ],
  invalid: [
    {
      code: "async function foo(){}",
      errors: [{ message: "Async function name must end in 'Async'" }]
    }
  ]
});
