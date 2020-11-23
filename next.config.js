const withImage = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    [withImage],
    [withCSS],
    [withSass],
    [optimizedImages],
]);
