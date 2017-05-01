import { Injectable } from '@angular/core';
import { Armor } from './armor';
import { ARMORS } from './data-armor';

@Injectable()
export class ArmorService {
    getArmor(armorNames: string[]): Promise<Armor> {
        let armorName = armorNames[Math.floor(Math.random() * armorNames.length)];
        let armor = ARMORS[armorName];
        return Promise.resolve(armor);
    }
}
