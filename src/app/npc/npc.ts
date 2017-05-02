import { Alignment } from './alignment';
import { Race } from './race';
import { Profession } from './profession';
import { AttributeDictionary } from './attribute-dictionary';
import { SkillDictionary } from './skill-dictionary';
import { Action } from './action';
import { Armor } from './armor';
import { Weapon } from './weapon';
import { Size } from './size';
import { ChallengeRating } from './challenge-rating';
import { CR_TABLE } from './data-cr-dictionary';


export class Npc {
    name: string;
    race: Race; // includes size, att mods, speed
    alignment: Alignment;
    profession: Profession;
    armorClass: number;
    armor: Armor;
    hitPoints: string; // generated from profession.hitDie + con bonus, calc average then put hd in parens
    averageHitPoints: number;
    hitDie: number;
    attributes: AttributeDictionary; // attribute => 10 + race.attributeModifers + profession.attributeModifers
    skillProficiencies: SkillDictionary; // boolean dictionary lookups in O(1) time
    senses: string; // Passive Perception + race.senses
    actions: Action[];
    meleeWeapon: Weapon;
    rangedWeapon: Weapon;
    challengeRating: ChallengeRating;

    constructor() {
        this.armorClass = 10;
        this.challengeRating = CR_TABLE['0'];
        this.attributes = new AttributeDictionary(10, 10, 10, 10, 10, 10);
    }

    updateAttributes(modifier: AttributeDictionary): void {
        this.attributes['strength'] += modifier['strength'];
        this.attributes['dexterity'] += modifier['dexterity'];
        this.attributes['constitution'] += modifier['constitution'];
        this.attributes['intelligence'] += modifier['intelligence'];
        this.attributes['wisdom'] += modifier['wisdom'];
        this.attributes['charisma'] += modifier['charisma'];
    }

    setHitDie(size: Size): void {
        if (size === Size.Small) {
            this.hitDie = 6;
        } else if (this.race.size === Size.Medium) {
            this.hitDie = 8;
        } else if (this.race.size === Size.Large) {
            this.hitDie = 10;
        } else {
            this.hitDie = 8;
        }
    }

    setAverageHitpoints(): void {
        let numHd = this.challengeRating.hitDieQuantity;
        let bonusHealth = Math.floor(this.attributes['constitution'] - 10 / 2);
        let minRoll = 1 + bonusHealth;
        let maxRoll = this.hitDie + bonusHealth;
        this.averageHitPoints = numHd * Math.min((minRoll + maxRoll) / 2);
    }

}
