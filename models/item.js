const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String, //legendary, epic, basic, starter, consumable
        reqiured: true
    },
    description: {
        type: String,
        required: true
    },
    stats: {
        health: Number,
        healthRegen: Number,
        mana: Number,
        manaRegen: Number,
        energy: Number,
        energyRegen: Number,
        attackDamage: Number,
        abilityPower: Number,
        armor: Number,
        magicResist: Number,
        attackSpeed: Number,
        criticalStrikeChance: Number,
        criticalStrikeDamage: Number,
        moveSpeed: Number,
        cooldownReduction: Number,
        abilityHaste: Number,
        armorPenetration: Number,
        magicPenetration: Number,
        lifeSteal: Number,
        spellVamp: Number,
        omnivamp: Number,
        tenacity: Number,

    },
    cost: {
        type: Number,
        required: true,
        min: 0
    },
    imageUrl: {
        type: String
    }
});

module.exports = mongoose.model('Item', itemSchema)