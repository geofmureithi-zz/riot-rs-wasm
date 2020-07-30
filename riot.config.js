const { registerPreprocessor } = require('@riotjs/compiler')

// register the pug preprocessor
registerPreprocessor('javascript', 'rust', (code, options) => {
  //console.log(Object.keys(options), options.source);
  return {
    code
  }
})

module.exports = {
  javascript: 'rs'
} 



