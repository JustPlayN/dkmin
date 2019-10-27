module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    // 禁止出现多余空格
    'no-multi-spaces': [ 2, {
      ignoreEOLComments: true               // 忽略注释前面的空格
    }],
    'comma-dangle': ['error', 'only-multiline'], // 允许使用拖尾逗号
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,               // 允许在空行使用空白符
      'ignoreComments': true,               // 允许在注释块中使用空白符
    }],                                     // 允许使用行尾空白
    'no-callback-literal': ['off'],         // 允许使用callback
    'prefer-promise-reject-errors': ['off'],// 允许reject返回任意值
    'space-unary-ops': ['off']              // 允许：++、--、!、!!、new等
  },
  'extends': [
    '@megalo/standard'
  ]
}
