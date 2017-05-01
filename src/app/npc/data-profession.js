"use strict";
var profession_1 = require("./profession");
var attribute_dictionary_1 = require("./attribute-dictionary");
exports.PROFESSIONS = [
    new profession_1.Profession('Gladiator', new attribute_dictionary_1.AttributeDictionary(1, 1, 1, -3, 0, 1), ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'], ['sling', 'longbow'], ['hide', 'chain shirt', 'half plate', 'studded leather'], ['athletics', 'performance', 'intimidation']),
    new profession_1.Profession('Knight', new attribute_dictionary_1.AttributeDictionary(2, -1, 0, -1, 1, -1), ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'], ['sling', 'longbow'], ['hide', 'chain shirt', 'half plate', 'studded leather'], ['athletics', 'performance', 'intimidation']),
];
//# sourceMappingURL=data-profession.js.map