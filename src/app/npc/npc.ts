import { Alignment } from './alignment';
import { Race } from './race';
import { Profession } from './profession';
import { AttributeDictionary } from './attribute-dictionary';
import { SkillDictionary } from './skill-dictionary';
import { Action } from './action';
import { Armor } from './armor';
import { Weapon } from './weapon';

export class Npc {
    name: string;
    race: Race; // includes size, att mods, speed
    alignment: Alignment;
    profession: Profession;
    armorClass: number;
    armor: Armor;
    hitPoints: string; // generated from profession.hitDie + con bonus, calc average then put hd in parens
    attributes: AttributeDictionary; // attribute => 10 + race.attributeModifers + profession.attributeModifers
    skillProficiencies: SkillDictionary; // boolean dictionary lookups in O(1) time
    senses: string; // Passive Perception + race.senses
    actions: Action[];
    meleeWeapon: Weapon;
    rangedWeapon: Weapon;

    constructor() {
        this.armorClass = 10;
        this.attributes = new AttributeDictionary(10, 20, 10, 10, 10, 10);
    }
}
