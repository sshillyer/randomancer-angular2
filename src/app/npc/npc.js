"use strict";
var attribute_dictionary_1 = require("./attribute-dictionary");
var size_1 = require("./size");
var data_cr_dictionary_1 = require("./data-cr-dictionary");
var Npc = (function () {
    function Npc() {
        this.armorClass = 10;
        this.challengeRating = data_cr_dictionary_1.CR_TABLE['0'];
        this.attributes = new attribute_dictionary_1.AttributeDictionary(10, 10, 10, 10, 10, 10);
    }
    Npc.prototype.updateAttributes = function (modifier) {
        this.attributes['strength'] += modifier['strength'];
        this.attributes['dexterity'] += modifier['dexterity'];
        this.attributes['constitution'] += modifier['constitution'];
        this.attributes['intelligence'] += modifier['intelligence'];
        this.attributes['wisdom'] += modifier['wisdom'];
        this.attributes['charisma'] += modifier['charisma'];
    };
    Npc.prototype.setHitDie = function (size) {
        if (size === size_1.Size.Small) {
            this.hitDie = 6;
        }
        else if (this.race.size === size_1.Size.Medium) {
            this.hitDie = 8;
        }
        else if (this.race.size === size_1.Size.Large) {
            this.hitDie = 10;
        }
        else {
            this.hitDie = 8;
        }
    };
    Npc.prototype.setAverageHitpoints = function () {
        var numHd = this.challengeRating.hitDieQuantity;
        var bonusHealth = Math.floor((this.attributes['constitution'] - 10) / 2);
        var minRoll = 1 + bonusHealth;
        var maxRoll = this.hitDie + bonusHealth;
        this.averageHitPoints = Math.floor(numHd * (minRoll + maxRoll) / 2);
    };
    return Npc;
}());
exports.Npc = Npc;
//# sourceMappingURL=npc.js.map