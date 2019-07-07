
const glob = require("glob");
const files = glob.sync("./src/webapp/views/**/*.entry.js");
const {join, resolve} = require("path");
let _entry = {};
for (let item of files) {
    if (/.+\/([a-zA-Z]+[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
        const entryKey = RegExp.$1;
        _entry[entryKey] = item;
    }
}
const webpackConfg = {
    entry:_entry,
    output: {
        path: join(__dirname, "./dist/assets"),
        publicPath: "/",
        filename: "scripts/[name].bundle.js"
    }
}
module.exports = webpackConfg;