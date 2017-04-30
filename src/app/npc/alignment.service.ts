import { Injectable } from '@angular/core';
import { Alignment } from './alignment';
import { ALIGNMENTS } from './data-alignment';

@Injectable()
export class AlignmentService {
    getRandomAlignment(): Promise<Alignment> {
        let randomAlignment = ALIGNMENTS[Math.floor(Math.random() * ALIGNMENTS.length)];
        return Promise.resolve(randomAlignment);
    }
}
