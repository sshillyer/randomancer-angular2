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
var villain_weakness_service_1 = require("./villain-weakness.service");
var platform_browser_1 = require("@angular/platform-browser"); // used to export to JSON
var VillainsComponent = (function () {
    function VillainsComponent(villainService, schemeService, villainMethodService, villainWeaknessService, sanitizer // used to export to JSON
    ) {
        this.villainService = villainService;
        this.schemeService = schemeService;
        this.villainMethodService = villainMethodService;
        this.villainWeaknessService = villainWeaknessService;
        this.sanitizer = sanitizer; // used to export to JSON
    }
    VillainsComponent.prototype.ngOnInit = function () {
        this.getRandomVillain();
    };
    VillainsComponent.prototype.getRandomVillain = function () {
        var _this = this;
        this.rawTextBlock = null;
        this.villainService.getRandomVillain()
            .then(function (villain) { return _this.randomVillain = villain; });
        this.schemeService.getRandomScheme()
            .then(function (scheme) { return _this.randomVillain.scheme = scheme; });
        this.villainMethodService.getRandomVillainMethod()
            .then(function (method) { return _this.randomVillain.method = method; });
        this.villainWeaknessService.getRandomWeakness()
            .then(function (weakness) { return _this.randomVillain.weakness = weakness; });
    };
    VillainsComponent.prototype.getJSONstring = function () {
        var villain = {
            'objective': this.randomVillain.scheme.objective,
            'scheme': this.randomVillain.scheme.specificScheme,
            'methodology': this.randomVillain.method.methodType,
            'technique': this.randomVillain.method.specificMethod,
            'weakness': this.randomVillain.weakness.weakness
        };
        this.rawTextBlock = JSON.stringify(villain, null, 2); // third param pretty prints
    };
    VillainsComponent.prototype.getHomebreweryString = function () {
        this.rawTextBlock = "##### Random Villain Details\n<div class='wide'>\n| Objective | Scheme | Methodology | Technique | Weakness\n|:----------|:-------|:------------|:----------|:--------\n| " + this.randomVillain.scheme.objective + "|" + this.randomVillain.scheme.specificScheme + "|" + this.randomVillain.method.methodType + "|" + this.randomVillain.method.specificMethod + "|" + this.randomVillain.weakness.weakness + "\n</div>\n";
    };
    return VillainsComponent;
}());
VillainsComponent = __decorate([
    core_1.Component({
        selector: 'villains',
        templateUrl: './villains.component.html',
        providers: [villain_service_1.VillainService, scheme_service_1.SchemeService, villain_method_service_1.VillainMethodService, villain_weakness_service_1.VillainWeaknessService]
    }),
    __metadata("design:paramtypes", [villain_service_1.VillainService,
        scheme_service_1.SchemeService,
        villain_method_service_1.VillainMethodService,
        villain_weakness_service_1.VillainWeaknessService,
        platform_browser_1.DomSanitizer // used to export to JSON
    ])
], VillainsComponent);
exports.VillainsComponent = VillainsComponent;
/* Notes:
    To get the data from VillainService:
    1. first import the service
    2. add it to the providers array in @Component
    3. add it to the constructor to inject it into the AppComponent class

 */ 
//# sourceMappingURL=villains.component.js.map