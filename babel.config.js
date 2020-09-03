module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12',
          browsers: ['last 2 versions']
        }
      }
    ],
    '@babel/preset-react'
  ]
};
