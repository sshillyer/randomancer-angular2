"use strict";
var attribute_1 = require("./attribute");
var attribute_dictionary_1 = require("./attribute-dictionary");
var size_1 = require("./size");
var data_cr_dictionary_1 = require("./data-cr-dictionary");
var data_proficiencies_1 = require("./data-proficiencies");
var Npc = (function () {
    function Npc() {
        this.skillProficiencies = [];
        this.armorClass = 10;
        this.challengeRating = data_cr_dictionary_1.CR_TABLE['0'];
        this.attributes = new attribute_dictionary_1.AttributeDictionary(10, 10, 10, 10, 10, 10);
        this.averageWeaponDamage = { 'melee': 0, 'ranged': 0 };
        this.toHitBonus = { 'melee': 0, 'ranged': 0 };
        this.weaponBonus = { 'melee': 0, 'ranged': 0 };
    }
    Npc.prototype.updateAttributes = function (modifier) {
        this.attributes['strength'] += modifier['strength'];
        this.attributes['dexterity'] += modifier['dexterity'];
        this.attributes['constitution'] += modifier['constitution'];
        this.attributes['intelligence'] += modifier['intelligence'];
        this.attributes['wisdom'] += modifier['wisdom'];
        this.attributes['charisma'] += modifier['charisma'];
    };
    Npc.prototype.setHitDie = function (size) {
        if (size === size_1.Size.Small) {
            this.hitDie = 6;
        }
        else if (this.race.size === size_1.Size.Medium) {
            this.hitDie = 8;
        }
        else if (this.race.size === size_1.Size.Large) {
            this.hitDie = 10;
        }
        else {
            this.hitDie = 8;
        }
    };
    Npc.prototype.setAverageHitpoints = function () {
        var numHd = this.challengeRating.hitDieQuantity;
        var bonusHealth = Math.floor((this.attributes['constitution'] - 10) / 2);
        var minRoll = 1 + bonusHealth;
        var maxRoll = this.hitDie + bonusHealth;
        this.averageHitPoints = Math.floor(numHd * (minRoll + maxRoll) / 2);
    };
    Npc.prototype.setSkillProficiencies = function (skills) {
        for (var i = 0; i < skills.length; i++) {
            this.skillProficiencies.push(data_proficiencies_1.PROFICIENCIES[skills[i]]);
        }
        this.setSkillsString();
    };
    Npc.prototype.setSkillsString = function () {
        var result = '';
        for (var i = 0; i < this.skillProficiencies.length; i++) {
            result += this.skillProficiencies[i].name + this.getSkillBonus(this.skillProficiencies[i].primaryAttribute);
            if (i < this.skillProficiencies.length - 1) {
                result += ', ';
            }
        }
        this.skillsString = result;
    };
    Npc.prototype.getSkillBonus = function (attribute) {
        var aStr = '';
        if (attribute === attribute_1.Attribute.Strength) {
            aStr = 'strength';
        }
        else if (attribute === attribute_1.Attribute.Dexterity) {
            aStr = 'dexterity';
        }
        else if (attribute === attribute_1.Attribute.Constitution) {
            aStr = 'constitution';
        }
        else if (attribute === attribute_1.Attribute.Intelligence) {
            aStr = 'intelligence';
        }
        else if (attribute === attribute_1.Attribute.Wisdom) {
            aStr = 'wisdom';
        }
        else if (attribute === attribute_1.Attribute.Charisma) {
            aStr = 'charisma';
        }
        var baseScore = this.attributes[aStr];
        var bonus = Math.floor((baseScore - 10) / 2) + this.challengeRating.profBonus;
        var str = (bonus > 0) ? (' +' + bonus.toString()) : (' -' + bonus.toString());
        return str;
    };
    Npc.prototype.getWeaponBonus = function (weaponType) {
        var thisWeapon = null;
        if (weaponType === 'melee') {
            thisWeapon = this.meleeWeapon;
        }
        else if (weaponType === 'ranged') {
            thisWeapon = this.rangedWeapon;
        }
        var attribute = null;
        if (thisWeapon.damageType === 'strength') {
            attribute = this.attributes['strength'];
        }
        else if (thisWeapon.damageType === 'dexterity') {
            attribute = this.attributes['dexterity'];
        }
        else {
            attribute = Math.max(this.attributes['strength'], this.attributes['dexterity']);
        }
        return Math.floor((attribute - 10) / 2);
    };
    Npc.prototype.setWeaponBonus = function (weaponType) {
        this.weaponBonus[weaponType] = this.getWeaponBonus(weaponType);
    };
    Npc.prototype.setWeaponToHitBonus = function (weaponType) {
        var bonus = this.getWeaponBonus(weaponType);
        this.toHitBonus[weaponType] = bonus + this.challengeRating.profBonus;
    };
    Npc.prototype.setAverageWeaponDamage = function (weaponType) {
        var thisWeapon = null;
        if (weaponType === 'melee') {
            thisWeapon = this.meleeWeapon;
        }
        else if (weaponType === 'ranged') {
            thisWeapon = this.rangedWeapon;
        }
        var bonusDamage = this.getWeaponBonus(weaponType);
        this.averageWeaponDamage[weaponType] = Math.floor((1 + bonusDamage + thisWeapon.dieSize + bonusDamage) / 2);
    };
    return Npc;
}());
exports.Npc = Npc;
//# sourceMappingURL=npc.js.map