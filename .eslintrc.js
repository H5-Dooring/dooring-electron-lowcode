module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parser: 'babel-eslint',
  rules: {
    'global-require': [0],
    'spaced-comment': [0],
    camelcase: [1], // 驼峰法命名仅警告
    'max-classes-per-file': [0],
    'jsx-a11y/media-has-caption': [0], // 媒体必须有标题，关闭
    'react/sort-comp': [1], // 函数排序，暂时只警告
    'no-restricted-syntax': [1], // 警告受限的语法
    'arrow-body-style': [1], // 箭头函数body只警告
    'no-underscore-dangle': [1], // 使用下划线属性只警告
    'no-param-reassign': [1], // 修改传入的参数属性只警告
    'no-unused-vars': [0],
    'no-plusplus': [0],
    'no-return-assign': [0],
    'prefer-promise-reject-errors': [1],
    'object-shorthand': [1], // 对象简写仅警告
    'no-extra-boolean-cast': [0], // 关闭双感叹号布尔值判断报错
    radix: [0],
  },
  globals: {
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
