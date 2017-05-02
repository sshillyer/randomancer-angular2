export class ChallengeRating {
    label: string;
    profBonus: number;
    hitDieQuantity: number;
    attackQuantity: number;

    constructor(l: string, bonus: number, hd: number, attackQuantity: number) {
        this.label = l;
        this.profBonus = bonus;
        this.hitDieQuantity = hd;
        this.attackQuantity = attackQuantity;
    }
}
