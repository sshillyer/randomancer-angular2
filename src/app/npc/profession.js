"use strict";
var Profession = (function () {
    function Profession(name, attributes, meleeWeapons, rangedWeapons, armor, skills) {
        this.name = name;
        this.attributeModifiers = attributes;
        this.meleeWeaponProficiencies = meleeWeapons;
        this.rangedWeaponProficiencies = rangedWeapons;
        this.armorProficiencies = armor;
        this.skillProficiencies = skills;
    }
    return Profession;
}());
exports.Profession = Profession;
//# sourceMappingURL=profession.js.map