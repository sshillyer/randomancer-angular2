import { ChallengeRating } from './challenge-rating';

/*
 * See Official DMG page 274 table for these approximations
 */
export const CR_TABLE: { [id: string]: ChallengeRating } = {
//  Lookup string               label, prof, hd
    '0':    new ChallengeRating('0',    2,  1,  1),
    '1/8':  new ChallengeRating('1/8',  2,  2,  1),
    '1/4':  new ChallengeRating('1/4',  2,  3,  1),
    '1/2':  new ChallengeRating('1/2',  2,  4,  1),
    '1':    new ChallengeRating('1',    2,  5,  2),
    '2':    new ChallengeRating('2',    2,  6,  2),
    '3':    new ChallengeRating('3',    2,  7,  2),
    '4':    new ChallengeRating('4',    2,  8,  2),
    '5':    new ChallengeRating('5',    3,  9,  3),
    '6':    new ChallengeRating('6',    3,  10, 3),
    '7':    new ChallengeRating('7',    3,  11, 3),
    '8':    new ChallengeRating('8',    3,  12, 3),
    '9':    new ChallengeRating('9',    4,  13, 3),
    '10':   new ChallengeRating('10',   4,  14, 3),
};
