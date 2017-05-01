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
var npc_service_1 = require("./npc.service");
var race_service_1 = require("./race.service");
var alignment_service_1 = require("./alignment.service");
var profession_service_1 = require("./profession.service");
var armor_service_1 = require("./armor.service");
var weapon_service_1 = require("./weapon.service");
var NpcComponent = (function () {
    function NpcComponent(npcService, raceService, alignmentService, professionService, armorService, weaponService) {
        this.npcService = npcService;
        this.raceService = raceService;
        this.alignmentService = alignmentService;
        this.professionService = professionService;
        this.armorService = armorService;
        this.weaponService = weaponService;
    }
    NpcComponent.prototype.ngOnInit = function () {
        this.getRandomNpc();
    };
    NpcComponent.prototype.getRandomNpc = function () {
        var _this = this;
        this.rawTextBlock = null;
        // this.randomNpc = new Npc();
        this.npcService.getRandomNpc()
            .then(function (npc) { return _this.randomNpc = npc; });
        this.raceService.getRandomRace()
            .then(function (race) { return _this.randomNpc.race = race; });
        this.alignmentService.getRandomAlignment()
            .then(function (alignment) { return _this.randomNpc.alignment = alignment; });
        this.professionService.getRandomProfession()
            .then(function (profession) { return _this.randomNpc.profession = profession; })
            .then(function (profession) {
            _this.setMeleeWeapon(profession.meleeWeaponProficiencies);
            _this.setRangedWeapon(profession.rangedWeaponProficiencies);
            _this.setArmor(profession.armorProficiencies);
        });
    };
    NpcComponent.prototype.setMeleeWeapon = function (meleeWeaponProficiencies) {
        var _this = this;
        this.weaponService.getWeapon(meleeWeaponProficiencies)
            .then(function (weapon) { return _this.randomNpc.meleeWeapon = weapon; });
    };
    NpcComponent.prototype.setRangedWeapon = function (rangedWeaponProficiencies) {
        var _this = this;
        this.weaponService.getWeapon(rangedWeaponProficiencies)
            .then(function (weapon) { return _this.randomNpc.rangedWeapon = weapon; });
    };
    NpcComponent.prototype.setArmor = function (armorProficiencies) {
        var _this = this;
        this.armorService.getArmor(armorProficiencies)
            .then(function (armor) { return _this.randomNpc.armor = armor; })
            .then(function (armor) {
            return _this.randomNpc.armorClass = armor.armorClassBase
                + Math.min(Math.floor((_this.randomNpc.attributes['dexterity'] - 10) / 2), armor.armorClassDexMax);
        });
    };
    NpcComponent.prototype.getJSONstring = function () {
        this.rawTextBlock = 'TODO: Make JSON';
    };
    NpcComponent.prototype.getHomebreweryString = function () {
        this.rawTextBlock = 'TODO: Make Markdown';
        return;
    };
    return NpcComponent;
}());
NpcComponent = __decorate([
    core_1.Component({
        selector: 'npc',
        templateUrl: './npc.component.html',
        providers: [
            npc_service_1.NpcService,
            race_service_1.RaceService,
            alignment_service_1.AlignmentService,
            profession_service_1.ProfessionService,
            armor_service_1.ArmorService,
            weapon_service_1.WeaponService,
        ],
    }),
    __metadata("design:paramtypes", [npc_service_1.NpcService,
        race_service_1.RaceService,
        alignment_service_1.AlignmentService,
        profession_service_1.ProfessionService,
        armor_service_1.ArmorService,
        weapon_service_1.WeaponService])
], NpcComponent);
exports.NpcComponent = NpcComponent;
//# sourceMappingURL=npc.component.js.map