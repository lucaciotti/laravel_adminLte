var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(function(mix) {
//     mix.sass('app.scss');
// });

var bowerDir = './resources/assets/vendor/';

var cssPaths = [
    bowerDir + "AdminLTE/bootstrap/css/bootstrap.css",
    bowerDir + "font-awesome/css/font-awesome.css",
    bowerDir + "Ionicons/css/ionicons.css",
    bowerDir + "AdminLTE/dist/css/AdminLTE.css",
    bowerDir + "AdminLTE/dist/css/skins/skin-blue.min.css",
    bowerDir + "AdminLTE/dist/css/skins/skin-black.min.css",
    bowerDir + "AdminLTE/dist/css/skins/skin-green.min.css",
    bowerDir + "AdminLTE/dist/css/skins/skin-red.min.css",
];

var jsPaths = [
    bowerDir + "AdminLTE/plugins/jQuery/jQuery-2.2.0.min.js",
    bowerDir + "AdminLTE/bootstrap/js/bootstrap.js",
    bowerDir + "AdminLTE/dist/js/app.js",
];

var fontPaths = [
    bowerDir + "font-awesome/fonts",
    bowerDir + "AdminLTE/bootstrap/fonts",
];

elixir(function(mix) {
    mix.styles(cssPaths, 'public/css/app.css')
        .scripts(jsPaths, 'public/js/vendor.js')
        .copy('resources/assets/js/app.js', 'public/js/app.js')
        .copy(fontPaths, 'public/fonts');

});
