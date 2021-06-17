const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        } else {
            list = list.filter((item) => {
                if (path.extname(item) === '.' + ext) return true;
            })
            return callback(null, list);
        }
    });
}