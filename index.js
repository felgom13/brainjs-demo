const brain = require('brain.js')
const network = new brain.recurrent.LSTM()

const data = require('./data.json')
const trainingData = data.map(({ input, output }) => ({ input, output }))

network.train(trainingData, {
  iterations: 2000
})

const output = network.run([{ r: 0, g: 0, b: 0 }, { r: 30, g: 30, b: 30 }])

console.log(`Contrast: ${output}`)
