"use strict";
var profession_1 = require("./profession");
var attribute_dictionary_1 = require("./attribute-dictionary");
exports.PROFESSIONS = [
    new profession_1.Profession('Gladiator', new attribute_dictionary_1.AttributeDictionary(2, 2, 4, -2, 0, 0), ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'], ['sling', 'longbow'], ['hide', 'chain shirt', 'half plate', 'studded leather'], ['athletics', 'performance', 'intimidation'], '1'),
    new profession_1.Profession('Knight', new attribute_dictionary_1.AttributeDictionary(4, -2, 2, 0, 2, 1), ['battleaxe', 'flail', 'greataxe', 'greatsword', 'maul', 'trident', 'warhammer', 'whip'], ['sling', 'longbow'], ['chain shirt', 'breastplate', 'half plate', 'ring mail', 'chain mail', 'splint', 'plate'], ['athletics', 'persuasion', 'perception'], '2'),
];
//# sourceMappingURL=data-profession.js.map