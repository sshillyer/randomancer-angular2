"use strict";
var weapon_1 = require("./weapon");
exports.WEAPONS = {
    'club': new weapon_1.Weapon('Club', 'Melee', 1, 4, 'bludgeoning', 'strength', '0'),
    'dagger': new weapon_1.Weapon('Dagger', 'Melee or Ranged', 1, 4, 'piercing', 'finesse', '20/60'),
    'greatclub': new weapon_1.Weapon('Greatclub', 'Melee', 1, 8, 'bludgeoning', 'strength', '0'),
    'handaxe': new weapon_1.Weapon('Handaxe', 'Melee or Ranged', 1, 6, 'slashing', 'strength', '0'),
    'javelin': new weapon_1.Weapon('Javelin', 'Melee', 1, 6, 'piercing', 'strength', '30/120'),
    'light hammer': new weapon_1.Weapon('Light hammer', 'Melee or Ranged', 1, 4, 'bludgeoning', 'strength', '0'),
    'mace': new weapon_1.Weapon('Mace', 'Melee', 1, 6, 'bludgeoning', 'strength', '0'),
    'quarterstaff': new weapon_1.Weapon('Quarterstaff', 'Melee', 1, 8, 'bludgeoning', 'strength', '0'),
    'sickle': new weapon_1.Weapon('Sickle', 'Melee', 1, 4, 'slashing', 'strength', '0'),
    'spear': new weapon_1.Weapon('Spear', 'Melee or Ranged', 1, 6, 'piercing', 'strength', '20/60'),
    'crossbow': new weapon_1.Weapon('Crossbow, light', 'Ranged', 1, 8, 'piercing', 'dexterity', '80/320'),
    'dart': new weapon_1.Weapon('Dart', 'Ranged', 1, 4, 'piercing', 'finesse', '20/60'),
    'shortbow': new weapon_1.Weapon('Shortbow', 'Ranged', 1, 6, 'piercing', 'dexterity', '0'),
    'sling': new weapon_1.Weapon('Sling', 'Ranged', 1, 4, 'bludgeoning', 'dexterity', '0'),
    'battleaxe': new weapon_1.Weapon('Battleaxe', 'Melee', 1, 10, 'slashing', 'strength', '0'),
    'flail': new weapon_1.Weapon('Flail', 'Melee', 1, 8, 'bludgeoning', 'strength', '0'),
    'glaive': new weapon_1.Weapon('Glaive', 'Melee', 1, 10, 'slashing', 'strength', '0'),
    'greataxe': new weapon_1.Weapon('Greataxe', 'Melee', 1, 12, 'slashing', 'strength', '0'),
    'greatsword': new weapon_1.Weapon('Greatsword', 'Melee', 2, 6, 'slashing', 'strength', '0'),
    'halberd': new weapon_1.Weapon('Halberd', 'Melee', 1, 10, 'slashing', 'strength', '10'),
    'maul': new weapon_1.Weapon('Maul', 'Melee', 2, 6, 'bludgeoning', 'strength', '0'),
    'morningstar': new weapon_1.Weapon('Morningstar', 'Melee', 1, 8, 'piercing', 'strength', '0'),
    'pike': new weapon_1.Weapon('Pike', 'Melee', 1, 10, 'piercing', 'strength', '10'),
    'rapier': new weapon_1.Weapon('Rapier', 'Melee', 1, 8, 'piercing', 'finesse', '0'),
    'scimitar': new weapon_1.Weapon('Scimitar', 'Melee', 1, 6, 'slashing', 'finesse', '0'),
    'shortsword': new weapon_1.Weapon('Shortsword', 'Melee', 1, 6, 'piercing', 'finesse', '0'),
    'trident': new weapon_1.Weapon('Trident', 'Melee', 1, 6, 'piercing', 'strength', '20/60'),
    'war pick': new weapon_1.Weapon('War pick', 'Melee', 1, 8, 'piercing', 'strength', '0'),
    'warhammer': new weapon_1.Weapon('Warhammer', 'Melee', 1, 8, 'bludgeoning', 'strength', '0'),
    'whip': new weapon_1.Weapon('Whip', 'Melee', 1, 4, 'slashing', 'finesse', '10'),
    'blowgun': new weapon_1.Weapon('Blowgun', 'Melee', 1, 4, 'piercing', 'dexterity', '25/100'),
    'hand crossbow': new weapon_1.Weapon('Crossbow, hand', 'Melee', 1, 6, 'piercing', 'dexterity', '0'),
    'heavy crossbow': new weapon_1.Weapon('Crossbow, heavy', 'Melee', 1, 10, 'piercing', 'dexterity', '0'),
    'longbow': new weapon_1.Weapon('Longbow', 'Melee', 1, 8, 'piercing', 'dexterity', '0')
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
//# sourceMappingURL=data-weapons.js.map