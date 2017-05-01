import { Attribute } from './attribute';

export class Proficiency {
    name: string;
    primaryAttribute: Attribute;
    constructor(name: string, attribute: Attribute) {
        this.name = name;
        this.primaryAttribute = attribute;
    }
}