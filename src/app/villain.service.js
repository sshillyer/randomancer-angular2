"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var villain_1 = require("./villain");
var VillainService = (function () {
    function VillainService() {
    }
    VillainService.prototype.getRandomVillain = function () {
        var randomVillain = new villain_1.Villain();
        randomVillain.randomize();
        return Promise.resolve(randomVillain);
    };
    return VillainService;
}());
VillainService = __decorate([
    core_1.Injectable()
], VillainService);
exports.VillainService = VillainService;
//# sourceMappingURL=villain.service.js.map