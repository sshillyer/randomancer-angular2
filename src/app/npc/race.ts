import { Size } from './size';
import { AttributeDictionary } from './attribute-dictionary';

export class Race {
    label: string;
    size: Size;
    attributeModifiers: AttributeDictionary;
    speed: string;
    senses: string;
    languageProficiencies: string;
}
