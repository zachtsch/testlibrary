"use strict";
exports.__esModule = true;
exports.randint = void 0;
function randint(min, max) {
    var _a;
    if (min > max)
        _a = [max, min], min = _a[0], max = _a[1];
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randint = randint;
