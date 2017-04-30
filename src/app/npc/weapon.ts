export class Weapon {
    name: string;
    attackType: string; // 'Melee' or 'Ranged' or 'Melee or Ranged'
    dieNumber: number; // in '2d6', this is the 2
    dieSize: number; // in '2d6', this is the 6
    damageType: string; // piercing, bludgeoning, slashing
    primaryAttribute: string; // 'strength', 'dexterity' or 'finesse'
    range: string; // '20/60' e.g.
    constructor(n: string, at: string, dieNum: number, die: number, dType: string, primAtt: string, range: string) {
        this.name = n;
        this.attackType = at;
        this.dieNumber = dieNum;
        this.dieSize = die;
        this.damageType = dType;
        this.primaryAttribute = primAtt;
        this.range = range;
    }
}
