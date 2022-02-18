const path = require('path');

// PLUGINS Y MINIFICADORES DE CSS Y SCSS/SASS
// Para reducir el tamano de las hojas de estilo de nuestro proyecto

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del HTML que va a usar Webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Para reducir los CSS
const { SourceMapDevToolPlugin } = require('webpack'); // Para conocer el Source Map de nuestro proyecto

// Configuraciones de puerto
const port = process.env.PORT || 3000;

// Exportar configuracion webpack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // Reglas para archivos js y jsx
            // Tienen que pasar el LINTING para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'source-map-loader',
                ],
            },
            // Reglas para archivos js y jsx
            // Para BABEL ES y JSX
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react',
                        ],
                    },
                },
            },
            // Reglas para archivos CSS, SCSS y SASS
            // Para minificarlos y cargarlos en el bundle
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            // Reglas para los archivos de imagenes
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html',
            },
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css',
            },
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map',
            },
        ),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
        modules: [
            'node_modules',
        ],
        alias: {
            'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min'),
        },
    },
};
