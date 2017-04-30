import { Injectable } from '@angular/core';
import { Npc } from './npc';

@Injectable()
export class NpcService {
    getRandomNpc(): Promise<Npc> {
        let randomNpc = new Npc();
        return Promise.resolve(randomNpc);
    }
}
