"use strict";
var attribute_dictionary_1 = require("./attribute-dictionary");
var Npc = (function () {
    function Npc() {
        this.armorClass = 10;
        this.attributes = new attribute_dictionary_1.AttributeDictionary(10, 10, 10, 10, 10, 10);
    }
    return Npc;
}());
exports.Npc = Npc;
//# sourceMappingURL=npc.js.map