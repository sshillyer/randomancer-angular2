import { Weapon } from './weapon';

export const WEAPONS: { [id: string]: Weapon } = {
    'club': new Weapon(
        'Club',
        'Melee',
        1, 4, 'bludgeoning',
        'strength',
        '0'
    ),
    'dagger': new Weapon(
        'Dagger',
        'Melee or Ranged',
        1, 4, 'piercing',
        'finesse',
        '20/60'
    ),
    'greatclub': new Weapon(
        'Greatclub',
        'Melee',
        1, 8, 'bludgeoning',
        'strength',
        '0'
    ),
    'handaxe': new Weapon(
        'Handaxe',
        'Melee or Ranged',
        1, 6, 'slashing',
        'strength',
        '0'
    ),
    'javelin': new Weapon(
        'Javelin',
        'Melee',
        1, 6, 'piercing',
        'strength',
        '30/120'
    ),
    'light hammer': new Weapon(
        'Light hammer',
        'Melee or Ranged',
        1, 4, 'bludgeoning',
        'strength',
        '0'
    ),
    'mace': new Weapon(
        'Mace',
        'Melee',
        1, 6, 'bludgeoning',
        'strength',
        '0'
    ),
    'quarterstaff': new Weapon(
        'Quarterstaff',
        'Melee',
        1, 8, 'bludgeoning',
        'strength',
        '0'
    ),
    'sickle': new Weapon(
        'Sickle',
        'Melee',
        1, 4, 'slashing',
        'strength',
        '0'
    ),
    'spear': new Weapon(
        'Spear',
        'Melee or Ranged',
        1, 6, 'piercing',
        'strength',
        '20/60'
    ),
    'crossbow': new Weapon(
        'Crossbow, light',
        'Ranged',
        1, 8, 'piercing',
        'dexterity',
        '80/320'
    ),
    'dart': new Weapon(
        'Dart',
        'Ranged',
        1, 4, 'piercing',
        'finesse',
        '20/60'
    ),
    'shortbow': new Weapon(
        'Shortbow',
        'Ranged',
        1, 6, 'piercing',
        'dexterity',
        '0'
    ),
    'sling': new Weapon(
        'Sling',
        'Ranged',
        1, 4, 'bludgeoning',
        'dexterity',
        '0'
    ),
    'battleaxe': new Weapon(
        'Battleaxe',
        'Melee',
        1, 10, 'slashing',
        'strength',
        '0'
    ),
    'flail': new Weapon(
        'Flail',
        'Melee',
        1, 8, 'bludgeoning',
        'strength',
        '0'
    ),
    'glaive': new Weapon(
        'Glaive',
        'Melee',
        1, 10, 'slashing',
        'strength',
        '0'
    ),
    'greataxe': new Weapon(
        'Greataxe',
        'Melee',
        1, 12, 'slashing',
        'strength',
        '0'
    ),
    'greatsword': new Weapon(
        'Greatsword',
        'Melee',
        2, 6, 'slashing',
        'strength',
        '0'
    ),
    'halberd': new Weapon(
        'Halberd',
        'Melee',
        1, 10, 'slashing',
        'strength',
        '10'
    ),
    'maul': new Weapon(
        'Maul',
        'Melee',
        2, 6, 'bludgeoning',
        'strength',
        '0'
    ),
    'morningstar': new Weapon(
        'Morningstar',
        'Melee',
        1, 8, 'piercing',
        'strength',
        '0'
    ),
    'pike': new Weapon(
        'Pike',
        'Melee',
        1, 10, 'piercing',
        'strength',
        '10'
    ),
    'rapier': new Weapon(
        'Rapier',
        'Melee',
        1, 8, 'piercing',
        'finesse',
        '0'
    ),
    'scimitar': new Weapon(
        'Scimitar',
        'Melee',
        1, 6, 'slashing',
        'finesse',
        '0'
    ),
    'shortsword': new Weapon(
        'Shortsword',
        'Melee',
        1, 6, 'piercing',
        'finesse',
        '0'
    ),
    'trident': new Weapon(
        'Trident',
        'Melee',
        1, 6, 'piercing',
        'strength',
        '20/60'
    ),
    'war pick': new Weapon(
        'War pick',
        'Melee',
        1, 8, 'piercing',
        'strength',
        '0'
    ),
    'warhammer': new Weapon(
        'Warhammer',
        'Melee',
        1, 8, 'bludgeoning',
        'strength',
        '0'
    ),
    'whip': new Weapon(
        'Whip',
        'Melee',
        1, 4, 'slashing',
        'finesse',
        '10'
    ),
    'blowgun': new Weapon(
        'Blowgun',
        'Melee',
        1, 4, 'piercing',
        'dexterity',
        '25/100'
    ),
    'hand crossbow': new Weapon(
        'Crossbow, hand',
        'Melee',
        1, 6, 'piercing',
        'dexterity',
        '0'
    ),
    'heavy crossbow': new Weapon(
        'Crossbow, heavy',
        'Melee',
        1, 10, 'piercing',
        'dexterity',
        '0'
    ),
    'longbow': new Weapon(
        'Longbow',
        'Melee',
        1, 8, 'piercing',
        'dexterity',
        '0'
    )
};

// export const WEAPONS: Weapon[] = [
//     new Weapon(
//         'Club',
//         'Melee',
//         1, 4, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Dagger',
//         'Melee or Ranged',
//         1, 4, 'piercing',
//         'finesse',
//         '20/60'
//     ),
//     new Weapon(
//         'Greatclub',
//         'Melee',
//         1, 8, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Handaxe',
//         'Melee or Ranged',
//         1, 6, 'slashing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Javelin',
//         'Melee',
//         1, 6, 'piercing',
//         'strength',
//         '30/120'
//     ),
//     new Weapon(
//         'Light hammer',
//         'Melee or Ranged',
//         1, 4, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Mace',
//         'Melee',
//         1, 6, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Quarterstaff',
//         'Melee',
//         1, 8, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Sickle',
//         'Melee',
//         1, 4, 'slashing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Spear',
//         'Melee or Ranged',
//         1, 6, 'piercing',
//         'strength',
//         '20/60'
//     ),
//     new Weapon(
//         'Crossbow, light',
//         'Ranged',
//         1, 8, 'piercing',
//         'dexterity',
//         '80/320'
//     ),
//     new Weapon(
//         'Dart',
//         'Ranged',
//         1, 4, 'piercing',
//         'finesse',
//         '20/60'
//     ),
//     new Weapon(
//         'Shortbow',
//         'Ranged',
//         1, 6, 'piercing',
//         'dexterity',
//         '0'
//     ),
//     new Weapon(
//         'Sling',
//         'Ranged',
//         1, 4, 'bludgeoning',
//         'dexterity',
//         '0'
//     ),
//     new Weapon(
//         'Battleaxe',
//         'Melee',
//         1, 10, 'slashing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Flail',
//         'Melee',
//         1, 8, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Glaive',
//         'Melee',
//         1, 10, 'slashing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Greataxe',
//         'Melee',
//         1, 12, 'slashing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Greatsword',
//         'Melee',
//         2, 6, 'slashing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Halberd',
//         'Melee',
//         1, 10, 'slashing',
//         'strength',
//         '10'
//     ),
//     new Weapon(
//         'Maul',
//         'Melee',
//         2, 6, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Morningstar',
//         'Melee',
//         1, 8, 'piercing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Pike',
//         'Melee',
//         1, 10, 'piercing',
//         'strength',
//         '10'
//     ),
//     new Weapon(
//         'Rapier',
//         'Melee',
//         1, 8, 'piercing',
//         'finesse',
//         '0'
//     ),
//     new Weapon(
//         'Scimitar',
//         'Melee',
//         1, 6, 'slashing',
//         'finesse',
//         '0'
//     ),
//     new Weapon(
//         'Shortsword',
//         'Melee',
//         1, 6, 'piercing',
//         'finesse',
//         '0'
//     ),
//     new Weapon(
//         'Trident',
//         'Melee',
//         1, 6, 'piercing',
//         'strength',
//         '20/60'
//     ),
//     new Weapon(
//         'War pick',
//         'Melee',
//         1, 8, 'piercing',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Warhammer',
//         'Melee',
//         1, 8, 'bludgeoning',
//         'strength',
//         '0'
//     ),
//     new Weapon(
//         'Whip',
//         'Melee',
//         1, 4, 'slashing',
//         'finesse',
//         '10'
//     ),
//     new Weapon(
//         'Blowgun',
//         'Melee',
//         1, 4, 'piercing',
//         'dexterity',
//         '25/100'
//     ),
//     new Weapon(
//         'Crossbow, hand',
//         'Melee',
//         1, 6, 'piercing',
//         'dexterity',
//         '0'
//     ),
//     new Weapon(
//         'Crossbow, heavy',
//         'Melee',
//         1, 10, 'piercing',
//         'dexterity',
//         '0'
//     ),
//     new Weapon(
//         'Longbow',
//         'Melee',
//         1, 8, 'piercing',
//         'dexterity',
//         '0'
//     )
// ];
