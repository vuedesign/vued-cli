module.exports = (options = {}) => {
  let pkg = {
        "name": "vued",
        "version": "1.0.0",
        "description": "A Vue.js project",
        "author": "n.see",
        "private": true,
        "scripts": {
            "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
            "start": "npm run dev",
            "lint": "eslint --ext .js,.vue src",
            "build": "node build/build.js",
            "cpt": "cp -rf ./* ../vued-cli/templates/project"
        },
        "dependencies": {
            "axios": "^0.18.0",
            "js-cookie": "^2.2.0",
            "vue": "^2.5.2",
            "vue-router": "^3.0.1",
            "vuex": "^3.0.1",
            "vuex-router-sync": "^5.0.0"
        },
        "devDependencies": {
            "autoprefixer": "^7.1.2",
            "babel-core": "^6.22.1",
            "babel-eslint": "^8.2.1",
            "babel-helper-vue-jsx-merge-props": "^2.0.3",
            "babel-loader": "^7.1.1",
            "babel-plugin-syntax-jsx": "^6.18.0",
            "babel-plugin-transform-runtime": "^6.22.0",
            "babel-plugin-transform-vue-jsx": "^3.5.0",
            "babel-preset-env": "^1.3.2",
            "babel-preset-stage-2": "^6.22.0",
            "chalk": "^2.0.1",
            "copy-webpack-plugin": "^4.0.1",
            "css-loader": "^0.28.0",
            "eslint": "^4.15.0",
            "eslint-config-airbnb-base": "^11.3.0",
            "eslint-config-standard": "^12.0.0",
            "eslint-friendly-formatter": "^3.0.0",
            "eslint-import-resolver-webpack": "^0.8.3",
            "eslint-loader": "^1.7.1",
            "eslint-plugin-import": "^2.7.0",
            "eslint-plugin-node": "^7.0.1",
            "eslint-plugin-promise": "^4.0.1",
            "eslint-plugin-standard": "^4.0.0",
            "eslint-plugin-vue": "^4.0.0",
            "extract-text-webpack-plugin": "^3.0.0",
            "file-loader": "^1.1.4",
            "friendly-errors-webpack-plugin": "^1.6.1",
            "html-webpack-plugin": "^2.30.1",
            "node-notifier": "^5.1.2",
            "optimize-css-assets-webpack-plugin": "^3.2.0",
            "ora": "^1.2.0",
            "portfinder": "^1.0.13",
            "postcss-import": "^11.0.0",
            "postcss-loader": "^2.0.8",
            "postcss-url": "^7.2.1",
            "rimraf": "^2.6.0",
            "sass-loader": "^7.1.0",
            "semver": "^5.3.0",
            "shelljs": "^0.7.6",
            "uglifyjs-webpack-plugin": "^1.1.1",
            "url-loader": "^0.5.8",
            "vue-loader": "^13.3.0",
            "vue-style-loader": "^3.0.1",
            "vue-template-compiler": "^2.5.2",
            "webpack": "^3.6.0",
            "webpack-bundle-analyzer": "^2.9.0",
            "webpack-dev-server": "^2.9.1",
            "webpack-merge": "^4.1.0"
        },
        "engines": {
            "node": ">= 6.0.0",
            "npm": ">= 3.0.0"
        },
        "browserslist": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
        ]
    };

    pkg.name = 'wujian=====';
    return JSON.stringify(pkg);
};
