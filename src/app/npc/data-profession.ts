import { Profession } from './profession';
import { AttributeDictionary } from './attribute-dictionary';

export const PROFESSIONS: Profession[] = [
    new Profession(
        'Gladiator',
        new AttributeDictionary(2, 2, 4, -2, 0, 0),
        ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'],
        ['sling', 'longbow'],
        ['hide', 'chain shirt', 'half plate', 'studded leather'],
        ['athletics', 'performance', 'intimidation'],
        '1',
    ),
    new Profession(
        'Knight',
        new AttributeDictionary(4, -2, 2, 0, 2, 1),
        ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'],
        ['sling', 'longbow'],
        ['chain shirt', 'breastplate', 'half plate', 'ring mail', 'chain mail', 'splint', 'plate'],
        ['athletics', 'persuasion', 'perception'],
        Guard'2',
    ),
    new Profession(
      'Alchemist',
      new AttributeDictionary(-2, 2, -1, 4, 0, 0),
      ['dagger', 'shortsword', 'quarterstaff'],
      ['dart', 'sling'],
      ['unarmored', 'padded', 'leather'],
      ['arcana', 'history'],
      '1/2',
    ),
    new Profession(
      'Archer',
      new AttributeDictionary(2, 4, 0, -2, 2, -1),
      ['shortsword', 'spear'],
      ['longbow', 'crossbow', 'heavy crossbow', 'shortbow'],
      ['studded leather', 'hide', 'chain shirt'],
      ['athletics', 'perception', 'survival'],
      '1',
    ),
    new Profession(
      'Cutpurse',
      new AttributeDictionary(0, 4, -1, 0, 2, -2),
      ['dagger', 'shortsword'],
      ['sling', 'dart', 'hand crossbow'],
      ['leather', 'studded leather'],
      ['acrobatics', 'sleightOfHand', 'stealth'],
      '1/2',
    ),
    new Profession(
      'Elite Guard',
      new AttributeDictionary(4, 0, 2, 0 2, 0),
      ['glaive', 'halberd', 'pike'],
      ['heavy crossbow', 'longbow', 'javelin'],
      ['plate', 'splint', 'chain mail'],
      ['athletics', 'insight', 'perception', 'investigation'],
      '5',
    ),
];
