"use strict";
var ChallengeRating = (function () {
    function ChallengeRating(l, bonus, hd) {
        this.label = l;
        this.profBonus = bonus;
        this.hitDieQuantity = hd;
    }
    return ChallengeRating;
}());
exports.ChallengeRating = ChallengeRating;
/*
0       1   4
1/8     2   8
1/4     3   12
1/2     4   16
1       5   20
*/
//# sourceMappingURL=challenge-rating.js.map