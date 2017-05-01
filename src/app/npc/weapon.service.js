"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var data_weapons_1 = require("./data-weapons");
var WeaponService = (function () {
    function WeaponService() {
    }
    WeaponService.prototype.getWeapon = function (weaponNames) {
        var weaponName = weaponNames[Math.floor(Math.random() * weaponNames.length)];
        var weapon = data_weapons_1.WEAPONS[weaponName];
        return Promise.resolve(weapon);
    };
    return WeaponService;
}());
WeaponService = __decorate([
    core_1.Injectable()
], WeaponService);
exports.WeaponService = WeaponService;
//# sourceMappingURL=weapon.service.js.map