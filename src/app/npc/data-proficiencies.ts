import { Proficiency } from './proficiency';
import { Attribute } from './attribute';

export const PROFICIENCIES: { [id: string]: Proficiency } = {
    'acrobatics': new Proficiency('acrobatics', Attribute.Dexterity),
    'animalHandling': new Proficiency('animalHandling', Attribute.Wisdom),
    'arcana': new Proficiency('arcana', Attribute.Intelligence),
    'athletics': new Proficiency('athletics', Attribute.Strength),
    'deception': new Proficiency('deception', Attribute.Charisma),
    'history': new Proficiency('history', Attribute.Intelligence),
    'insight': new Proficiency('insight', Attribute.Wisdom),
    'intimidation': new Proficiency('intimidation', Attribute.Charisma),
    'investigation': new Proficiency('investigation', Attribute.Intelligence),
    'medicine': new Proficiency('medicine', Attribute.Wisdom),
    'nature': new Proficiency('nature', Attribute.Intelligence),
    'perception': new Proficiency('perception', Attribute.Wisdom),
    'performance': new Proficiency('performance', Attribute.Charisma),
    'persuasion': new Proficiency('persuasion', Attribute.Charisma),
    'religion': new Proficiency('religion', Attribute.Wisdom),
    'sleightOfHand': new Proficiency('sleightOfHand', Attribute.Dexterity),
    'stealth': new Proficiency('stealth', Attribute.Dexterity),
    'survival': new Proficiency('survival', Attribute.Wisdom),
};
