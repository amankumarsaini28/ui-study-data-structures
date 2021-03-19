module.exports = {
  ignore: [/(node_modules)/],
  presets: [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],
    ['@babel/preset-env']
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic'
      }
    ]
  ]
};