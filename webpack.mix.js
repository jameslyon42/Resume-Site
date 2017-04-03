const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .styles(['node_modules/codemirror/lib/codemirror.css'], 'public/css/all.css')
   .scripts(['node_modules/codemirror/mode/xml/xml.js',
   			 'node_modules/codemirror/mode/javascript/javascript.js',
   			 'node_modules/codemirror/mode/css/css.js',
   			 'node_modules/codemirror/mode/htmlmixed/htmlmixed.js'], 'public/js/all.js');
