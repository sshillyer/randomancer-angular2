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
var AppComponent = (function () {
    function AppComponent(villainService) {
        this.villainService = villainService;
        this.title = 'Randomancer';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getVillain();
    };
    AppComponent.prototype.getVillain = function () {
        var _this = this;
        this.villainService.getRandomVillain().then(function (villain) { return _this.randomVillain = villain; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./app.component.html",
        providers: [villain_service_1.VillainService]
    }),
    __metadata("design:paramtypes", [villain_service_1.VillainService])
], AppComponent);
exports.AppComponent = AppComponent;
/* Notes:
    To get the data from VillainService:
    1. first import the service
    2. add it to the providers array in @Component
    3. add it to the constructor to inject it into the AppComponent class

 */
//# sourceMappingURL=app.component.js.map