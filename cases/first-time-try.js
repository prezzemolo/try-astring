const { generate } = require('astring')

console.log(generate({
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: 'poyo'
          },
          init: {
            type: 'Literal',
            value: 50
          }
        }
      ],
      kind: 'const'
    }
  ]
}))
