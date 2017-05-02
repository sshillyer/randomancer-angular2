"use strict";
var challenge_rating_1 = require("./challenge-rating");
/*
 * See Official DMG page 274 table for these approximations
 */
exports.CR_TABLE = {
    //  Lookup string               label, prof, hd
    '0': new challenge_rating_1.ChallengeRating('0', 2, 1, 1),
    '1/8': new challenge_rating_1.ChallengeRating('1/8', 2, 2, 1),
    '1/4': new challenge_rating_1.ChallengeRating('1/4', 2, 3, 1),
    '1/2': new challenge_rating_1.ChallengeRating('1/2', 2, 4, 1),
    '1': new challenge_rating_1.ChallengeRating('1', 2, 5, 2),
    '2': new challenge_rating_1.ChallengeRating('2', 2, 6, 2),
    '3': new challenge_rating_1.ChallengeRating('3', 2, 7, 2),
    '4': new challenge_rating_1.ChallengeRating('4', 2, 8, 2),
    '5': new challenge_rating_1.ChallengeRating('5', 3, 9, 3),
    '6': new challenge_rating_1.ChallengeRating('6', 3, 10, 3),
    '7': new challenge_rating_1.ChallengeRating('7', 3, 11, 3),
    '8': new challenge_rating_1.ChallengeRating('8', 3, 12, 3),
    '9': new challenge_rating_1.ChallengeRating('9', 4, 13, 3),
    '10': new challenge_rating_1.ChallengeRating('10', 4, 14, 3),
};
//# sourceMappingURL=data-cr-dictionary.js.map