module.exports = {
    entry: './src/index.js', 
    output: {
      filename: 'bundle.js', 
      path: path.resolve(__dirname, 'dist'), 
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Rule for handling JavaScript/JSX files
          exclude: /node_modules/, // Exclude node_modules folder
          use: {
            loader: 'babel-loader', // Use Babel loader
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
            },
          },
        },
      ],
    },
  };
  