"use strict";
// DMG page 94
var Scheme = (function () {
    function Scheme(objective, schemeStrings) {
        this.objective = objective;
        this.schemeStrings = schemeStrings;
        this.specificScheme = '';
    }
    Scheme.prototype.setRandomSpecificScheme = function () {
        this.specificScheme = this.schemeStrings[Math.floor(Math.random() * this.schemeStrings.length)];
    };
    return Scheme;
}());
exports.Scheme = Scheme;
//# sourceMappingURL=scheme.js.map