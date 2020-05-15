console.log("Async rule");
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Force Async function naming convention",
      category: "Possible Errors",
      recommended: true,
    },
  },
  create: function (context) {
    console.log(context);
    return {
      FunctionDeclaration(node) {
        console.log(node);
        if (node.async && !/Async$/.test(node.id.name)) {
          context.report({
            node,
            message: "Async function name must end in 'Async'",
          });
        }
      },
    };
  },
};
