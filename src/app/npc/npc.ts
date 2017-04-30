import { Alignment } from './alignment';
import { Race } from './race';
import { Profession } from './profession';
import { AttributeDictionary } from './attribute-dictionary';
import { SkillDictionary } from './skill-dictionary';
import { Action } from './action';

export class Npc {
    name: string;
    race: Race; // includes size, att mods, speed
    alignment: Alignment;
    profession: Profession;
    armorClass: number;
    hitPoints: string; // generated from profession.hitDie + con bonus, calc average then put hd in parens
    attributes: AttributeDictionary; // attribute => 10 + race.attributeModifers + profession.attributeModifers
    skillProficiencies: SkillDictionary; // boolean dictionary lookups in O(1) time
    senses: string; // Passive Perception + race.senses
    actions: Action[];

    constructor() {
        this.armorClass = 10;
        this.attributes = new AttributeDictionary(10, 10, 10, 10, 10, 10);
    }
}
