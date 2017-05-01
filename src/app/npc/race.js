"use strict";
var size_1 = require("./size");
var Race = (function () {
    function Race(n, size, attMods, speed, senses, languages) {
        this.name = n;
        this.size = size;
        this.sizeString = this.getSizeString(size);
        this.attributeModifiers = attMods;
        this.speed = speed;
        this.senses = senses;
        this.languages = languages;
    }
    Race.prototype.getSizeString = function (size) {
        if (size === size_1.Size.Large) {
            return 'Large';
        }
        else if (size === size_1.Size.Medium) {
            return 'Medium';
        }
        else if (size === size_1.Size.Small) {
            return 'Small';
        }
        else {
            return 'Something bad happened';
        }
    };
    return Race;
}());
exports.Race = Race;
//# sourceMappingURL=race.js.map