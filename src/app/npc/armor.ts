export class Armor {
    name: string;
    armorClassBase: number;
    armorClassDexMax: number;
    strengthRequirement: number;

    constructor(name: string, armorClassBase: number, armorClassDexMax: number, strengthRequirement: number) {
        this.name = name;
        this.armorClassBase = armorClassBase;
        this.armorClassDexMax = armorClassDexMax;
        this.strengthRequirement = strengthRequirement;
    }
}