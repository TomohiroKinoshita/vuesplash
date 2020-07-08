const mix = require('laravel-mix')

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
//成功　watchしながらphp serve  8081
// mix.js('resources/js/app.js', 'public/js')
//   .version()

//成功　watchしながらphp serve  8081
//valetじゃないので名前解決できないはず
// mix.browserSync('vuesplash.test')
//   .js('resources/js/app.js', 'public/js')
//   .version()


//成功　watchしながらphp serve  8081
//watchはしていないと変更が反映されない
  mix.browserSync({
    proxy: '0.0.0.0:8081', // アプリの起動アドレス
    open: false // ブラウザを自動で開かない
  })
  .js('resources/js/app.js', 'public/js')
  .version()