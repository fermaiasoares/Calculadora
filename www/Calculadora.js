var exec = require('cordova/exec');

exports.add = function (arg0, success, error) {
    exec(success, error, 'Calculadora', 'add', [arg0]);
}

exports.substr = function (arg0, success, error) {
    exec(success, error, 'Calculadora', 'substr', [arg0]);
}