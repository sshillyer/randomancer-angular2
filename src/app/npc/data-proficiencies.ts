import { Proficiency } from './proficiency';
import { Attribute } from './attribute';

export const PROFICIENCIES: { [id: string]: Proficiency } = {
    'acrobatics': new Proficiency('Acrobatics', Attribute.Dexterity),
    'animalHandling': new Proficiency('Animal Handling', Attribute.Wisdom),
    'arcana': new Proficiency('Arcana', Attribute.Intelligence),
    'athletics': new Proficiency('Athletics', Attribute.Strength),
    'deception': new Proficiency('Deception', Attribute.Charisma),
    'history': new Proficiency('History', Attribute.Intelligence),
    'insight': new Proficiency('Insight', Attribute.Wisdom),
    'intimidation': new Proficiency('Intimidation', Attribute.Charisma),
    'investigation': new Proficiency('Investigation', Attribute.Intelligence),
    'medicine': new Proficiency('Medicine', Attribute.Wisdom),
    'nature': new Proficiency('Nature', Attribute.Intelligence),
    'perception': new Proficiency('Perception', Attribute.Wisdom),
    'performance': new Proficiency('Performance', Attribute.Charisma),
    'persuasion': new Proficiency('Persuasion', Attribute.Charisma),
    'religion': new Proficiency('Religion', Attribute.Wisdom),
    'sleightOfHand': new Proficiency('SleightOfHand', Attribute.Dexterity),
    'stealth': new Proficiency('Stealth', Attribute.Dexterity),
    'survival': new Proficiency('Survival', Attribute.Wisdom),
};
