const fs = require('fs')
const theo = require('theo')
const camelCase = require('lodash.camelcase')
const mapKeys = require('lodash.mapkeys')

theo.registerTransform('web', ['color/hex'])
theo
  .convert({
    transform: {
      type: 'web',
      file: '../design-tokens/grape-skin.yml',
    },
    format: {
      type: 'json',
    },
  })
  .then(json => {
    const theme = {}
    mapKeys(JSON.parse(json), (v, k) => {
      theme[camelCase(k)] = v
    })
    fs.writeFile(
      './src/tokens/tokens.json',
      `${JSON.stringify(theme, null, '  ')}\n`,
      'utf8',
      () => {},
    )
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(`Error: ${error}`)
  })
