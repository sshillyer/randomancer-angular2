import { AttributeDictionary } from './attribute-dictionary';

export class Profession {
    name: string;
    attributeModifiers: AttributeDictionary;
    meleeWeaponProficiencies: string[];
    rangedWeaponProficiencies: string[];
    armorProficiencies: string[];
    skillProficiencies: string[];
    constructor(name: string, attributes: AttributeDictionary, meleeWeapons: string[],
                rangedWeapons: string[], armor: string[], skills: string[]) {
        this.name = name;
        this.attributeModifiers = attributes;
        this.meleeWeaponProficiencies = meleeWeapons;
        this.rangedWeaponProficiencies = rangedWeapons;
        this.armorProficiencies = armor;
        this.skillProficiencies = skills;
    }
}
