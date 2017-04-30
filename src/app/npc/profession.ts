import { AttributeDictionary } from './attribute-dictionary';

export class Profession {
    name: string;
    attributeModifiers: AttributeDictionary;
    meleeWeaponProficiencies: string[];
    rangedWeaponProficiencies: string[];
    armorProficiencies: string[];
}
