"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var villain_service_1 = require("./villain.service");
var VillainsComponent = (function () {
    function VillainsComponent(router, villainService) {
        this.router = router;
        this.villainService = villainService;
    }
    VillainsComponent.prototype.onSelect = function (villain) {
        this.selectedVillain = villain;
    };
    VillainsComponent.prototype.getVillains = function () {
        var _this = this;
        this.villainService.getVillains().then(function (villains) { return _this.villains = villains; });
    };
    VillainsComponent.prototype.ngOnInit = function () {
        this.getVillains();
    };
    VillainsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedVillain.id]);
    };
    return VillainsComponent;
}());
VillainsComponent = __decorate([
    core_1.Component({
        selector: 'my-villains',
        templateUrl: './villains.component.html',
        styleUrls: ['./villains.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        villain_service_1.VillainService])
], VillainsComponent);
exports.VillainsComponent = VillainsComponent;
//# sourceMappingURL=villains.component.js.map