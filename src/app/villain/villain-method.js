"use strict";
// DMG page 95
var VillainMethod = (function () {
    function VillainMethod(methodType, methodStrings) {
        this.methodType = methodType;
        this.methodStrings = methodStrings;
        this.specificMethod = '';
    }
    VillainMethod.prototype.setRandomSpecificMethod = function () {
        this.specificMethod = this.methodStrings[Math.floor(Math.random() * this.methodStrings.length)];
    };
    return VillainMethod;
}());
exports.VillainMethod = VillainMethod;
//# sourceMappingURL=villain-method.js.map