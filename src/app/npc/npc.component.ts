import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Npc } from './npc';
import { NpcService } from './npc.service';
import { Race } from './race';
import { RaceService } from './race.service';
import { Alignment } from './alignment';
import { AlignmentService } from './alignment.service';


@Component({
    selector: 'npc',
    templateUrl: './npc.component.html',
    providers: [ NpcService, RaceService, AlignmentService ]
})

export class NpcComponent implements OnInit {
    randomNpc: Npc;
    rawTextBlock: String;

    constructor(
        private npcService: NpcService,
        private raceService: RaceService,
        private alignmentService: AlignmentService
    ) {}

    ngOnInit(): void {
        this.getRandomNpc();
    }

    getRandomNpc(): void {
        this.rawTextBlock = null;
        this.npcService.getRandomNpc()
            .then(npc => this.randomNpc = npc);
        this.raceService.getRandomRace()
            .then(race => this.randomNpc.race = race);
        this.alignmentService.getRandomAlignment()
            .then(alignment => this.randomNpc.alignment = alignment);
    }

    getJSONstring(): void {
        this.rawTextBlock = 'TODO: Make JSON';
    }

    getHomebreweryString(): void {
        this.rawTextBlock = 'TODO: Make Markdown';
        return;
    }
}
