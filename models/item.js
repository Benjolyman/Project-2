const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

// const itemSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     type: {
//         type: String, //legendary, epic, basic, starter, consumable
//         reqiured: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     tags: [{
//         type: String,
//         required: true
//     }],
//     stats: {
//         health: Number,
//         healthRegen: Number,
//         mana: Number,
//         manaRegen: Number,
//         energy: Number,
//         energyRegen: Number,
//         attackDamage: Number,
//         abilityPower: Number,
//         armor: Number,
//         magicResist: Number,
//         attackSpeed: Number,
//         criticalStrikeChance: Number,
//         criticalStrikeDamage: Number,
//         moveSpeed: Number,
//         cooldownReduction: Number,
//         abilityHaste: Number,
//         armorPenetration: Number,
//         magicPenetration: Number,
//         lifeSteal: Number,
//         spellVamp: Number,
//         omnivamp: Number,
//         tenacity: Number,

//     },
//     cost: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     imageUrl: {
//         type: String
//     }
// });

// let legendaryItems = [
//     "Abyssal Mask", "Anathema's Chains", "Archangel's Staff", "Ardent Censer", "Atma's Reckoning", "Axiom Arc", "Banshee's Veil", "Black Cleaver", "Blackfire Torch", "Blade of the Ruined King", "Bloodletter's Curse",
//     "Bloodsong", "Bloodthirster", "Bounty of Worlds", "Celestial Opposition", "Chempunk Chainsword",
//     "Chemtech Putrifier", "Cosmic Drive", "Cryptbloom Dawncore", "Dead Man's Plate", "Death's Dance",
//     "Dream Maker", "Echoes of Helia", "Eclipse", "Edge of Night", "Essence Reaver", "Experimental Hexplate",
//     "Fimbulwinter", "Force of Nature", "Frozen Heart", "Guardian Angel", "Guinsoo's Rageblade", "Heartsteel",
//     "Hellfire Hatchet", "Hextech Gunblade", "Hextech Rocketbelt", "Hollow Radiance", "Horizon Focus",
//     "Hubris", "Hullbreaker", "Iceborn Gauntlet", "Immortal Shieldbow", "Imperial Mandate", "Infinity Edge",
//     "Jak'Sho, The Protean", "Kaenic Rookern", "Knight's Vow", "Kraken Slayer", "Liandry's Torment", "Lich Bane",
//     "Locket of the Iron Solari", "Lord Dominik's Regards", "Luden's Companion", "Malignance", "Manamune",
//     "Maw of Malmortius", "Mejai's Soulstealer", "Mercurial Scimitar", "Mikael's Blessing", "Moonstone Renewer",
//     "Morellonomicon", "Mortal Reminder", "Muramana", "Nashor's Tooth", "Navori Flickerblade", "Opportunity",
//     "Overlord's Bloodmail", "Perplexity", "Phantom Dancer", "Profane Hydra", "Rabadon's Deathcap",
//     "Randuin's Omen", "Rapid Firecannon", "Ravenous Hydra", "Redemption", "Riftmaker", "Rite of Ruin",
//     "Rod of Ages", "Runaan's Hurricane", "Rylai's Crystal Scepter", "Seraph's Embrace", "Serpent's Fang",
//     "Serylda's Grudge", "Shadowflame", "Shurelya's Battlesong", "Solstice Sleigh", "Spear of Shojin",
//     "Spectral Cutlass", "Spirit Visage", "Staff of Flowing Water", "Statikk Shiv", "Sterak's Gage",
//     "Stormrazor", "Stormsurge", "Stridebreaker", "Sundered Sky", "Sunfire Aegis", "Sword of Blossoming Dawn",
//     "Terminus", "The Collector", "Thornmail", "Titanic Hydra", "Trailblazer", "Trinity Force", "Umbral Glaive",
//     "Unending Despair", "Vigilant Wardstone", "Void Staff", "Voltaic Cyclosword", "Warmog's Armor",
//     "Winter's Approach", "Wit's End", "Wordless Promise", "Youmuu's Ghostblade", "Yun Tal Wildarrows",
//     "Zaz'Zak's Realmspike", "Zeke's Convergence", "Zhonya's Hourglass"
// ];

// let itemInsert = legendaryItems.map(item => ({ name: item, imageUrl: "" }));

// Item.insertMany(itemInsert)
//     .then(function (docs) {
//         console.log('Items have been successfully stored.', docs);
//     })
//     .catch(function (err) {
//         console.log('Error occurred while storing items.', err);
//     });