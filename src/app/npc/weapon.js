"use strict";
var Weapon = (function () {
    function Weapon(n, at, dieNum, die, dType, primAtt, range) {
        this.name = n;
        this.attackType = at;
        this.dieNumber = dieNum;
        this.dieSize = die;
        this.damageType = dType;
        this.primaryAttribute = primAtt;
        this.range = range;
    }
    Weapon.prototype.getRangeString = function () {
        if (this.range === '0') {
            return 'reach 5 ft';
        }
        else {
            return this.range;
        }
    };
    return Weapon;
}());
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.js.map