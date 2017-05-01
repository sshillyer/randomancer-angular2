"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var villains_component_1 = require("./villains/villains.component");
var villain_service_1 = require("./villains/villain.service");
var npc_component_1 = require("./npc/npc.component");
var npc_service_1 = require("./npc/npc.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'villains',
                    component: villains_component_1.VillainsComponent
                },
                {
                    path: 'npc',
                    component: npc_component_1.NpcComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            villains_component_1.VillainsComponent,
            npc_component_1.NpcComponent
        ],
        providers: [
            villain_service_1.VillainService,
            npc_service_1.NpcService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map