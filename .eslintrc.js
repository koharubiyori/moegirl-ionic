module.exports = {
    env: {
      es6: true,
      browser: true
    },
    extends: [
      'plugin:react/recommended',
      'standard'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier'
    ],
    rules: {
      'space-before-function-paren': 0, // function 的小括号之前必须要有空格
      'comma-dangle': 0,  // 对象的最后一个属性末尾必须有逗号
      'eol-last': 0,  // 文件最后一行必须有一个空行
      'no-trailing-spaces': 0,  // 禁止行尾有空格
      'prefer-const': 0, // 没有被重复赋值的变量都要用const声明,
      'no-unused-vars': 0, // 不能出现未使用变量(这个规则会把类型认为是变量)
      'no-undef': 0,  // 不能使用未定义的变量(reactNative环境比较特殊，这里禁用eslint的，ts的变量检查还是会起作用)
      'no-use-before-define': 0, // 禁止定义前使用(对ts类型的错误检测) 
      'padded-blocks': 0, // 代码块首尾必须要空行
      'no-return-assign': 0, // 不能返回赋值语句
      'no-cond-assign': 0, // 不能用赋值语句判断
      'camelcase': 0,  // 变量必须是camelcase风格的，目前来看开启这个会导致不能使用下划线开头的属性或变量
      'no-async-promise-executor': 0, // promise的处理函数不能有async修饰符 
      'no-redeclare': 0, // 不能重复定义（在使用var声明变量时这个规则会误报）
      'prefer-promise-reject-errors': 0,  // promise的reject必须传入一个Error对象
      'symbol-description': 0,  // symbol类型必需有描述
      'no-useless-escape': 0,   // 特殊字符需要转义，有误报
      'no-tabs': 0,  // 禁止使用tabs,
      'no-multiple-empty-lines': 0,  // 禁止多个空行
      'one-var': 0, // 禁止变量申明时用逗号一次申明多个
  
      'react/display-name': 0,   // 必须设置组件的displayName
      'react/prop-types': 0   // 检查属性是否在props上存在，有误报的情况
    }
  }
  