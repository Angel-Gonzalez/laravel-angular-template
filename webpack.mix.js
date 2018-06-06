let mix = require('laravel-mix');
let fs = require('fs');
const util = require('util');

const getFiles = function (dir) {
    return fs.readdirSync(dir).filter(file => {
        return fs.statSync(`${dir}/${file}`).isFile();
    });
};
const componentsFiles = [];
const folders = [
    'resources/assets/js/components'
];
folders.forEach((folder) => {
    getFiles(folder).map(file => folder + '/' + file).forEach(item => {
        componentsFiles.push(item)
    });
    console.log(util.inspect(folder, {showHidden: false, depth: null}));
    console.log(util.inspect(componentsFiles, {showHidden: false, depth: null}))
});

mix.js(['resources/assets/js/app.js', ...componentsFiles], 'public/js/app.js');

mix.js('resources/assets/js/bootstrap.js', 'public/js/bootstrap.js')
    .sass('resources/assets/sass/app.scss', 'public/css');
