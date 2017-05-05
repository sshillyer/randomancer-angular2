import { Alignment } from './alignment';
import { Race } from './race';
import { Profession } from './profession';
import { Attribute } from './attribute';
import { AttributeDictionary } from './attribute-dictionary';
import { SkillDictionary } from './skill-dictionary';
import { Action } from './action';
import { Armor } from './armor';
import { Weapon } from './weapon';
import { Size } from './size';
import { ChallengeRating } from './challenge-rating';
import { CR_TABLE } from './data-cr-dictionary';
import { Proficiency } from './proficiency';
import { PROFICIENCIES } from './data-proficiencies';

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
    attributes: AttributeDictionary;
    skillProficiencies: Proficiency[] = [];
    skillsString: String;
    senses: string; // Passive Perception + race.senses
    actions: Action[];
    meleeWeapon: Weapon;
    rangedWeapon: Weapon;
    averageWeaponDamage: { [id: string]: number }
    toHitBonus: { [id: string]: number }
    weaponBonus: { [id: string]: number }
    challengeRating: ChallengeRating;

    constructor() {
        this.armorClass = 10;
        this.challengeRating = CR_TABLE['0'];
        this.attributes = new AttributeDictionary(10, 10, 10, 10, 10, 10);
        this.averageWeaponDamage = { 'melee': 0, 'ranged': 0};
        this.toHitBonus = { 'melee': 0, 'ranged': 0};
        this.weaponBonus= { 'melee': 0, 'ranged': 0};
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
        let bonusHealth = Math.floor((this.attributes['constitution'] - 10) / 2);
        let minRoll = 1 + bonusHealth;
        let maxRoll = this.hitDie + bonusHealth;
        this.averageHitPoints = Math.floor( numHd * (minRoll + maxRoll) / 2);
    }

    setSkillProficiencies(skills: string[]): void {
        for (let i = 0; i < skills.length; i++) {
            this.skillProficiencies.push(PROFICIENCIES[skills[i]]);
        }
        this.setSkillsString();
    }

    setSkillsString(): void {
        let result = '';
        for (let i = 0; i < this.skillProficiencies.length; i++) {
            result += this.skillProficiencies[i].name + this.getSkillBonus(this.skillProficiencies[i].primaryAttribute);
            if (i < this.skillProficiencies.length - 1){
                result += ', ';
            }
        }
        this.skillsString = result;
    }

    getSkillBonus(attribute: Attribute): string {
        let aStr = '';
        if (attribute === Attribute.Strength) {
            aStr = 'strength';
        } else if (attribute === Attribute.Dexterity) {
            aStr = 'dexterity';
        } else if (attribute === Attribute.Constitution) {
            aStr = 'constitution';
        } else if (attribute === Attribute.Intelligence) {
            aStr = 'intelligence';
        } else if (attribute === Attribute.Wisdom) {
            aStr = 'wisdom';
        } else if (attribute === Attribute.Charisma) {
            aStr = 'charisma';
        }

        let baseScore = this.attributes[aStr];
        let bonus = Math.floor((baseScore - 10) / 2) + this.challengeRating.profBonus;
        let str = (bonus > 0) ? (' +' + bonus.toString()) : (' -' + bonus.toString());
        return str;
    }

    getWeaponBonus(weaponType: string): number {
        let thisWeapon = null;
        if (weaponType === 'melee') {
            thisWeapon = this.meleeWeapon;
        } else if (weaponType === 'ranged') {
            thisWeapon = this.rangedWeapon;
        }

        let attribute = null;
        if (thisWeapon.damageType === 'strength') {
            attribute = this.attributes['strength'];
        } else if (thisWeapon.damageType === 'dexterity') {
            attribute = this.attributes['dexterity'];
        } else  { // (thisWeapon.damageType === 'finesse')
            attribute = Math.max(this.attributes['strength'], this.attributes['dexterity']);
        }
        return Math.floor((attribute - 10) / 2);
    }

    setWeaponBonus(weaponType: string): void {
        this.weaponBonus[weaponType] = this.getWeaponBonus(weaponType);
    }

    setWeaponToHitBonus(weaponType: string): void {
        let bonus = this.getWeaponBonus(weaponType);
        this.toHitBonus[weaponType] = bonus + this.challengeRating.profBonus;
    }

    setAverageWeaponDamage(weaponType: string): void {
        let thisWeapon = null;
        if (weaponType === 'melee') {
            thisWeapon = this.meleeWeapon;
        } else if (weaponType === 'ranged') {
            thisWeapon = this.rangedWeapon;
        }
        let bonusDamage = this.getWeaponBonus(weaponType);
        this.averageWeaponDamage[weaponType] = Math.floor((1 + bonusDamage + thisWeapon.dieSize + bonusDamage) / 2);
    }
}
