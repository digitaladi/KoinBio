/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)




//require('../css/app.scss');
require('../fontawesome/css/font-awesome.min.css');
require('../fonts/Ink Free.eot');
require('../fonts/Ink Free.otf');
require('../fonts/Ink Free.ttf');
require('../fonts/Ink Free.woff');
require('../fonts/Puritas LT W04 Bold Italic.ttf');
// require('../uploads/images/articles');
// require('../uploads/images/fiches');




// returns the final, public path to this file
// path is relative to this file - e.g. assets/images/logo.png
// const logoPath = require('../images/logo_koinbio.png');

// var html = `<img src="${logoPath}">`;




// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');


// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');
require('../css/app.scss');
require('../css/style.css');
require('../css/slide.css');
require('../css/fiche.css');
require('../css/article.css');


require('./utilJS/composants');



$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

console.log('js de app.js');
