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
var villain_service_1 = require("./villain.service");
var scheme_service_1 = require("./scheme.service");
var villain_method_service_1 = require("./villain-method.service");
var VillainsComponent = (function () {
    function VillainsComponent(villainService, schemeService, villainMethodService) {
        this.villainService = villainService;
        this.schemeService = schemeService;
        this.villainMethodService = villainMethodService;
    }
    VillainsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.villainService.getRandomVillain()
            .then(function (villain) { return _this.randomVillain = villain; });
        this.schemeService.getRandomScheme()
            .then(function (scheme) { return _this.randomVillain.scheme = scheme; });
        this.villainMethodService.getRandomVillainMethod()
            .then(function (method) { return _this.randomVillain.method = method; });
    };
    return VillainsComponent;
}());
VillainsComponent = __decorate([
    core_1.Component({
        selector: 'villains',
        templateUrl: './villains.component.html',
        providers: [villain_service_1.VillainService, scheme_service_1.SchemeService, villain_method_service_1.VillainMethodService]
    }),
    __metadata("design:paramtypes", [villain_service_1.VillainService,
        scheme_service_1.SchemeService,
        villain_method_service_1.VillainMethodService])
], VillainsComponent);
exports.VillainsComponent = VillainsComponent;
/* Notes:
    To get the data from VillainService:
    1. first import the service
    2. add it to the providers array in @Component
    3. add it to the constructor to inject it into the AppComponent class

 */ 
//# sourceMappingURL=villains.component.js.map