"use strict";
var data_schemes_1 = require("./data-schemes");
var Villain = (function () {
    function Villain() {
    }
    Villain.prototype.randomize = function () {
        this.setRandomScheme();
    };
    Villain.prototype.setRandomScheme = function () {
        this.scheme = data_schemes_1.SCHEMES[Math.floor(Math.random() * data_schemes_1.SCHEMES.length)];
        this.scheme.specificScheme = this.scheme.schemeStrings[Math.floor(Math.random() * this.scheme.schemeStrings.length)];
    };
    return Villain;
}());
exports.Villain = Villain;
//# sourceMappingURL=villain.js.map