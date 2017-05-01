"use strict";
var race_1 = require("./race");
var attribute_dictionary_1 = require("./attribute-dictionary");
var size_1 = require("./size");
exports.RACES = [
    new race_1.Race('Dwarf', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(2, 0, 0, 0, 0, -2), '25 ft', 'darkvision (60 ft)', 'Common, Dwarvish'),
    new race_1.Race('Elf', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(0, 2, -2, 0, 0, 0), '30 ft', 'darkvision (60 ft)', 'Common, Elvish'),
    new race_1.Race('Goliath', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(2, -2, 2, -2, 0, 0), '30 ft', '', 'Common, Giant'),
    new race_1.Race('Halfling', size_1.Size.Small, new attribute_dictionary_1.AttributeDictionary(-2, 2, 0, 0, 0, 0), '25 ft', '', 'Common, Halfling'),
    new race_1.Race('Human', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(1, 1, 1, 1, 1, 1), '30 ft', '', 'Common, Two additional'),
    new race_1.Race('Dragonborn', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(2, -1, 0, -2, 0, 1), '30 ft', '', 'Common, Draconic'),
    new race_1.Race('Gnome', size_1.Size.Small, new attribute_dictionary_1.AttributeDictionary(0, 0, -2, 2, 0, 0), '25 ft', 'darkvision (60 ft)', 'Common, Gnomish'),
    new race_1.Race('Half-Elf', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(0, 2, 0, 0, 0, 2), '35 ft', 'darkvision (60 ft)', 'Common, Elvish, One additional'),
    new race_1.Race('Half-Orc', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(2, 0, 2, -2, 0, -2), '30 ft', 'darkvision (60 ft)', 'Common, Orcish'),
    new race_1.Race('Tiefling', size_1.Size.Medium, new attribute_dictionary_1.AttributeDictionary(-1, -1, -1, 1, 0, 2), '30 ft', 'darkvision (60 ft)', 'Common, Infernal'),
];
//# sourceMappingURL=data-race.js.map