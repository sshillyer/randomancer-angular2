import { Profession } from './profession';
import { AttributeDictionary } from './attribute-dictionary';

export const PROFESSIONS: Profession[] = [
    new Profession(
        'Gladiator',
        new AttributeDictionary(1, 1, 1, -3, 0, 1),
        ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'],
        ['sling', 'longbow'],
        ['hide', 'chain shirt', 'half plate', 'studded leather'],
        ['athletics', 'performance', 'intimidation']
    ),
    new Profession(
        'Knight',
        new AttributeDictionary(2, -1, 0, -1, 1, -1),
        ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'],
        ['sling', 'longbow'],
        ['hide', 'chain shirt', 'half plate', 'studded leather'],
        ['athletics', 'performance', 'intimidation']
    ),
];

