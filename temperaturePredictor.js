const brain = require('brain.js');

const net = new brain.NeuralNetwork()

net.train([
  { input: { temperatura:27, humedad:70 }, output: { calor: 1 } },
  { input: { temperatura:2, humedad:20 }, output: { calor: 0 } },
  { input: { temperatura:33, humedad:90 }, output: { calor: 1 } },
])

const output = net.run({ temperatura : 1, humedad: 20 }) 
console.log(output);
