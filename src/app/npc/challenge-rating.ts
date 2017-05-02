export class ChallengeRating {
    label: string;
    profBonus: number;
    hitDieQuantity: number;

    constructor(l: string, bonus: number, hd: number) {
        this.label = l;
        this.profBonus = bonus;
        this.hitDieQuantity = hd;
    }
}


/*
0       1   4
1/8     2   8
1/4     3   12
1/2     4   16
1       5   20
*/
