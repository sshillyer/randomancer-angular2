import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { WEAPONS } from './data-weapons';

@Injectable()
export class WeaponService {
    getWeapon(weaponNames: string[]): Promise<Weapon> {
        let weaponName = weaponNames[Math.floor(Math.random() * weaponNames.length)];
        let weapon = WEAPONS[weaponName];
        return Promise.resolve(weapon);
    }
}
