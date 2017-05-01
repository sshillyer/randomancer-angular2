"use strict";
var proficiency_1 = require("./proficiency");
var attribute_1 = require("./attribute");
exports.PROFICIENCIES = {
    'acrobatics': new proficiency_1.Proficiency('acrobatics', attribute_1.Attribute.Dexterity),
    'animalHandling': new proficiency_1.Proficiency('animalHandling', attribute_1.Attribute.Wisdom),
    'arcana': new proficiency_1.Proficiency('arcana', attribute_1.Attribute.Intelligence),
    'athletics': new proficiency_1.Proficiency('athletics', attribute_1.Attribute.Strength),
    'deception': new proficiency_1.Proficiency('deception', attribute_1.Attribute.Charisma),
    'history': new proficiency_1.Proficiency('history', attribute_1.Attribute.Intelligence),
    'insight': new proficiency_1.Proficiency('insight', attribute_1.Attribute.Wisdom),
    'intimidation': new proficiency_1.Proficiency('intimidation', attribute_1.Attribute.Charisma),
    'investigation': new proficiency_1.Proficiency('investigation', attribute_1.Attribute.Intelligence),
    'medicine': new proficiency_1.Proficiency('medicine', attribute_1.Attribute.Wisdom),
    'nature': new proficiency_1.Proficiency('nature', attribute_1.Attribute.Intelligence),
    'perception': new proficiency_1.Proficiency('perception', attribute_1.Attribute.Wisdom),
    'performance': new proficiency_1.Proficiency('performance', attribute_1.Attribute.Charisma),
    'persuasion': new proficiency_1.Proficiency('persuasion', attribute_1.Attribute.Charisma),
    'religion': new proficiency_1.Proficiency('religion', attribute_1.Attribute.Wisdom),
    'sleightOfHand': new proficiency_1.Proficiency('sleightOfHand', attribute_1.Attribute.Dexterity),
    'stealth': new proficiency_1.Proficiency('stealth', attribute_1.Attribute.Dexterity),
    'survival': new proficiency_1.Proficiency('survival', attribute_1.Attribute.Wisdom),
};
//# sourceMappingURL=data-proficiencies.js.map