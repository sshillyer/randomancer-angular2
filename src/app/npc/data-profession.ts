import { Profession } from './profession';
import { AttributeDictionary } from './attribute-dictionary';

export const PROFESSIONS: Profession[] = [
    new Profession(
        'Gladiator',
        new AttributeDictionary(2, 2, 4, -2, 0, 0),
        ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'],
        ['sling', 'longbow'],
        ['hide', 'chain shirt', 'half plate', 'studded leather'],
        ['athletics', 'performance', 'intimidation']
    ),
    new Profession(
        'Knight',
        new AttributeDictionary(4, -2, 2, 0, 2, 1),
        ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'],
        ['sling', 'longbow'],
        ['chain shirt', 'breast plate', 'half plate', 'ring mail', 'chain mail', 'splint', 'plate'],
        ['athletics', 'performance', 'intimidation']
    ),
];
