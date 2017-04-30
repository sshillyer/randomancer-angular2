import { Race } from './race';
import { AttributeDictionary } from './attribute-dictionary';
import { Size } from './size';

export const RACES: Race[] = [
    new Race(
        'Dwarf',
        Size.Medium,
        new AttributeDictionary(2, 0, 0, 0, 0, -2),
        '25 ft',
        'darkvision (60 ft)',
        'Common, Dwarvish'
    ),
    new Race(
        'Elf',
        Size.Medium,
        new AttributeDictionary(0, 2, -2, 0, 0, 0),
        '30 ft',
        'darkvision (60 ft)',
        'Common, Elvish'
    ),
    new Race(
        'Goliath',
        Size.Medium,
        new AttributeDictionary(2, -2, 2, -2, 0, 0),
        '30 ft',
        '',
        'Common, '
    ),
    new Race(
        'Halfling',
        Size.Small,
        new AttributeDictionary(-2, 2, 0, 0, 0, 0),
        '25 ft',
        '',
        'Common, Halfling'
    ),
    new Race(
        'Human',
        Size.Medium,
        new AttributeDictionary(1, 1, 1, 1, 1, 1),
        '30 ft',
        '',
        'Common, Two additional'
    ),
    new Race(
        'Dragonborn',
        Size.Medium,
        new AttributeDictionary(2, -1, 0, -2, 0, 1),
        '30 ft',
        '',
        'Common, Draconic'
    ),
    new Race(
        'Gnome',
        Size.Small,
        new AttributeDictionary(0, 0, -2, 2, 0, 0),
        '25 ft',
        'darkvision (60 ft)',
        'Common, Gnomish'
    ),
    new Race(
        'Half-Elf',
        Size.Medium,
        new AttributeDictionary(0, 2, 0, 0, 0, 2),
        '35 ft',
        'darkvision (60 ft)',
        'Common, Elvish, One additional'
    ),
    new Race(
        'Half-Orc',
        Size.Medium,
        new AttributeDictionary(2, 0, 2, -2, 0, -2),
        '30 ft',
        'darkvision (60 ft)',
        'Common, Orcish'
    ),
    new Race(
        'Tiefling',
        Size.Medium,
        new AttributeDictionary(-1, -1, -1, 1, 0, 2),
        '30 ft',
        'darkvision (60 ft)',
        'Common, '
    ),
];
