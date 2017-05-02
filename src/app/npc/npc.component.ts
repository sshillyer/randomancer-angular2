import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Npc } from './npc';
import { NpcService } from './npc.service';
import { RaceService } from './race.service';
import { AlignmentService } from './alignment.service';
import { ProfessionService } from './profession.service';
import { ArmorService } from './armor.service';
import { Weapon } from './weapon';
import { WeaponService } from './weapon.service';
import { Armor } from './armor';

@Component({
    selector: 'npc',
    templateUrl: './npc.component.html',
    providers: [
        NpcService,
        RaceService,
        AlignmentService,
        ProfessionService,
        ArmorService,
        WeaponService,
        ],
})

export class NpcComponent implements OnInit {
    randomNpc: Npc;
    rawTextBlock: String;

    constructor(
        private npcService: NpcService,
        private raceService: RaceService,
        private alignmentService: AlignmentService,
        private professionService: ProfessionService,
        private armorService: ArmorService,
        private weaponService: WeaponService,
    ) {}

    ngOnInit(): void {
        this.getRandomNpc();
    }

    getRandomNpc(): void {
        this.rawTextBlock = null;
        this.npcService.getRandomNpc()
            .then(npc => this.randomNpc = npc);

        // this.raceService.getRandomRace()
        //     .then(race => this.randomNpc.race = race)
        //     .then(race => {
        //         this.randomNpc.updateAttributes(race.attributeModifiers);
        //         this.randomNpc.setHitDie(race.size);
        //     });


        this.alignmentService.getRandomAlignment()
            .then(alignment => this.randomNpc.alignment = alignment);

        this.professionService.getRandomProfession()
            .then(profession => this.randomNpc.profession = profession)
            .then(profession => {
                this.setMeleeWeapon(profession.meleeWeaponProficiencies);
                this.setRangedWeapon(profession.rangedWeaponProficiencies);
                this.setArmor(profession.armorProficiencies);
                this.randomNpc.updateAttributes(profession.attributeModifiers);
                // copied from ~48 above
                this.raceService.getRandomRace()
                .then(race => this.randomNpc.race = race)
                .then(race => {
                    this.randomNpc.updateAttributes(race.attributeModifiers);
                    this.randomNpc.setHitDie(race.size);
                    this.setHitpointsString();
                    this.randomNpc.setAverageHitpoints();
               });
            });
    }


    setMeleeWeapon(meleeWeaponProficiencies: string[]): void {
        this.weaponService.getWeapon(meleeWeaponProficiencies)
        .then(weapon => this.randomNpc.meleeWeapon = weapon)
        .then(weapon => this.randomNpc.actions);
    }

    setRangedWeapon(rangedWeaponProficiencies: string[]): void {
        this.weaponService.getWeapon(rangedWeaponProficiencies)
        .then(weapon => this.randomNpc.rangedWeapon = weapon);
    }

    setArmor(armorProficiencies: string[]): void {
        this.armorService.getArmor(armorProficiencies)
        .then(armor => this.randomNpc.armor = armor)
        .then(armor =>
            this.randomNpc.armorClass = armor.armorClassBase 
            + Math.min( Math.floor((this.randomNpc.attributes['dexterity'] - 10) / 2), armor.armorClassDexMax));
    }

    setHitpointsString(): void {
        let bonusHealth = Math.floor((this.randomNpc.attributes['constitution'] - 10) / 2);
        this.randomNpc.hitPoints = (this.randomNpc.challengeRating.hitDieQuantity.toString() + 'd'
            + this.randomNpc.hitDie.toString()
            + ((bonusHealth > 0) ? '+' + bonusHealth.toString() : ''));
    }

    getJSONstring(): void {
        this.rawTextBlock = 'TODO: Make JSON';
    }

    getHomebreweryString(): void {
        this.rawTextBlock = 'TODO: Make Markdown';
        return;
    }
}
