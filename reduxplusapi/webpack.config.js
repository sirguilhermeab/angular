const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do seu projeto
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída do bundle
    filename: 'bundle.js', // Nome do arquivo de saída
  },
};
