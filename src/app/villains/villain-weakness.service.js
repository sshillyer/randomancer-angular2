"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var data_villain_weakness_1 = require("./data-villain-weakness");
var VillainWeaknessService = (function () {
    function VillainWeaknessService() {
    }
    VillainWeaknessService.prototype.getRandomWeakness = function () {
        var randomVillainWeakness = data_villain_weakness_1.VILLAIN_WEAKNESSES[Math.floor(Math.random() * data_villain_weakness_1.VILLAIN_WEAKNESSES.length)];
        return Promise.resolve(randomVillainWeakness);
    };
    return VillainWeaknessService;
}());
VillainWeaknessService = __decorate([
    core_1.Injectable()
], VillainWeaknessService);
exports.VillainWeaknessService = VillainWeaknessService;
//# sourceMappingURL=villain-weakness.service.js.map