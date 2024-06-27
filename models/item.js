const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;


let bootsItems = [
    
];

let legendaryItems = [
    { name: "Abyssal Mask", id: 3001 },
    { name: "Anathema's Chains", id: 8001 },
    { name: "Archangel's Staff", id: 3003 },
    { name: "Ardent Censer", id: 3504 },
    { name: "Axiom Arc", id: 6696 },
    { name: "Banshee's Veil", id: 3102 },
    { name: "Black Cleaver", id: 3071 },
    { name: "Blade of the Ruined King", id: 3153 },
    { name: "Bloodthirster", id: 3072 },
    { name: "Chempunk Chainsword", id: 6609 },
    { name: "Chemtech Putrifier", id: 3011 },
    { name: "Cosmic Drive", id: 4629 },
    { name: "Dead Man's Plate", id: 3742 },
    { name: "Death's Dance", id: 6333 },
    { name: "Echoes of Helia", id: 6616 },
    { name: "Eclipse", id: 6692 },
    { name: "Edge of Night", id: 3814 },
    { name: "Essence Reaver", id: 3508 },
    { name: "Fimbulwinter", id: 7022 },
    { name: "Force of Nature", id: 4401 },
    { name: "Frozen Heart", id: 3110 },
    { name: "Guardian Angel", id: 3026 },
    { name: "Guinsoo's Rageblade", id: 3124 },
    { name: "Heartsteel", id: 7026 },
    { name: "Hextech Rocketbelt", id: 3152 },
    { name: "Horizon Focus", id: 4628 },
    { name: "Hullbreaker", id: 6695 },
    { name: "Iceborn Gauntlet", id: 6662 },
    { name: "Immortal Shieldbow", id: 6673 },
    { name: "Imperial Mandate", id: 4005 },
    { name: "Infinity Edge", id: 3031 },
    { name: "Jak'Sho, The Protean", id: 6665 },
    { name: "Knight's Vow", id: 3109 },
    { name: "Kraken Slayer", id: 6672 },
    { name: "Liandry's Anguish", id: 6653 },
    { name: "Lich Bane", id: 3100 },
    { name: "Locket of the Iron Solari", id: 3190 },
    { name: "Lord Dominik's Regards", id: 3036 },
    { name: "Luden's Tempest", id: 6655 },
    { name: "Manamune", id: 3004 },
    { name: "Maw of Malmortius", id: 3156 },
    { name: "Mejai's Soulstealer", id: 3041 },
    { name: "Mercurial Scimitar", id: 3139 },
    { name: "Mikael's Blessing", id: 3222 },
    { name: "Moonstone Renewer", id: 6617 },
    { name: "Morellonomicon", id: 3165 },
    { name: "Mortal Reminder", id: 3033 },
    { name: "Muramana", id: 3042 },
    { name: "Nashor's Tooth", id: 3115 },
    { name: "Phantom Dancer", id: 3046 },
    { name: "Rabadon's Deathcap", id: 3089 },
    { name: "Randuin's Omen", id: 3143 },
    { name: "Rapid Firecannon", id: 3094 },
    { name: "Ravenous Hydra", id: 3074 },
    { name: "Redemption", id: 3107 },
    { name: "Riftmaker", id: 4633 },
    { name: "Rod of Ages", id: 3027 },
    { name: "Runaan's Hurricane", id: 3085 },
    { name: "Rylai's Crystal Scepter", id: 3116 },
    { name: "Seraph's Embrace", id: 3040 },
    { name: "Serpent's Fang", id: 6695 },
    { name: "Serylda's Grudge", id: 6694 },
    { name: "Shadowflame", id: 4645 },
    { name: "Shurelya's Battlesong", id: 2065 },
    { name: "Spear of Shojin", id: 3161 },
    { name: "Spirit Visage", id: 3065 },
    { name: "Staff of Flowing Water", id: 6616 },
    { name: "Statikk Shiv", id: 3087 },
    { name: "Sterak's Gage", id: 3053 },
    { name: "Stormrazor", id: 3095 },
    { name: "Stridebreaker", id: 6631 },
    { name: "Sunfire Aegis", id: 3068 },
    { name: "The Collector", id: 6676 },
    { name: "Thornmail", id: 3075 },
    { name: "Titanic Hydra", id: 3748 },
    { name: "Trinity Force", id: 3078 },
    { name: "Umbral Glaive", id: 3179 },
    { name: "Vigilant Wardstone", id: 4643 },
    { name: "Void Staff", id: 3135 },
    { name: "Warmog's Armor", id: 3083 },
    { name: "Winter's Approach", id: 3110 },
    { name: "Wit's End", id: 3091 },
    { name: "Youmuu's Ghostblade", id: 3142 },
    { name: "Zeke's Convergence", id: 3050 },
    { name: "Zhonya's Hourglass", id: 3157 },
    { name: "Berserker's Greaves", id: 3006 },
    { name: "Boots of Mobility", id: 3117 },
    { name: "Boots of Swiftness", id: 3009 },
    { name: "Ionian Boots of Lucidity", id: 3158 },
    { name: "Mercury's Treads", id: 3111 },
    { name: "Plated Steelcaps", id: 3047 },
    { name: "Sorcerer's Shoes", id: 3020 },
    { name: "Boots", id: 2422 }
];

let legendaryitemInsert = legendaryItems.map(item => ({ name: item.name, id: item.id , imageUrl: `${item.id}.png` }));

// Item.insertMany(legendaryitemInsert)
//     .then(function (docs) {
//         console.log('Items have been successfully stored.', docs);
//     })
//     .catch(function (err) {
//         console.log('Error occurred while storing items.', err);
//     });




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