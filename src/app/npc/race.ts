import { Size } from './size';
import { AttributeDictionary } from './attribute-dictionary';

export class Race {
    name: string;
    size: Size;
    sizeString: string;
    attributeModifiers: AttributeDictionary;
    speed: string;
    senses: string;
    languages: string;

    constructor(n: string, size: Size, attMods: AttributeDictionary, speed: string, senses: string, languages: string) {
        this.name = n;
        this.size = size;
        this.sizeString = this.getSizeString(size);
        this.attributeModifiers = attMods;
        this.speed = speed;
        this.senses = senses;
        this.languages = languages;
    }

    getSizeString(size: Size): string {
        if (size === Size.Large) {
            return 'Large';
        } else if (size === Size.Medium) {
            return 'Medium';
        } else if (size === Size.Small) {
            return 'Small';
        } else {
            return 'Something bad happened';
        }

    }
}
