"use strict";
var proficiency_1 = require("./proficiency");
var attribute_1 = require("./attribute");
exports.PROFICIENCIES = {
    'acrobatics': new proficiency_1.Proficiency('Acrobatics', attribute_1.Attribute.Dexterity),
    'animalHandling': new proficiency_1.Proficiency('Animal Handling', attribute_1.Attribute.Wisdom),
    'arcana': new proficiency_1.Proficiency('Arcana', attribute_1.Attribute.Intelligence),
    'athletics': new proficiency_1.Proficiency('Athletics', attribute_1.Attribute.Strength),
    'deception': new proficiency_1.Proficiency('Deception', attribute_1.Attribute.Charisma),
    'history': new proficiency_1.Proficiency('History', attribute_1.Attribute.Intelligence),
    'insight': new proficiency_1.Proficiency('Insight', attribute_1.Attribute.Wisdom),
    'intimidation': new proficiency_1.Proficiency('Intimidation', attribute_1.Attribute.Charisma),
    'investigation': new proficiency_1.Proficiency('Investigation', attribute_1.Attribute.Intelligence),
    'medicine': new proficiency_1.Proficiency('Medicine', attribute_1.Attribute.Wisdom),
    'nature': new proficiency_1.Proficiency('Nature', attribute_1.Attribute.Intelligence),
    'perception': new proficiency_1.Proficiency('Perception', attribute_1.Attribute.Wisdom),
    'performance': new proficiency_1.Proficiency('Performance', attribute_1.Attribute.Charisma),
    'persuasion': new proficiency_1.Proficiency('Persuasion', attribute_1.Attribute.Charisma),
    'religion': new proficiency_1.Proficiency('Religion', attribute_1.Attribute.Wisdom),
    'sleightOfHand': new proficiency_1.Proficiency('SleightOfHand', attribute_1.Attribute.Dexterity),
    'stealth': new proficiency_1.Proficiency('Stealth', attribute_1.Attribute.Dexterity),
    'survival': new proficiency_1.Proficiency('Survival', attribute_1.Attribute.Wisdom),
};
//# sourceMappingURL=data-proficiencies.js.map