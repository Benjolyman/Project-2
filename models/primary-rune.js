const mongoose = require('mongoose');

const runeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tree: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    }
});

const PrimaryRune = mongoose.model('PrimaryRune', runeSchema);

module.exports = PrimaryRune;

let runes = [
    { name: "Press the Attack", tree: "Precision" },
    { name: "Fleet Footwork", tree: "Precision" },
    { name: "Conqueror", tree: "Precision" },
    { name: "Electrocute", tree: "Domination" },
    { name: "Dark Harvest", tree: "Domination" },
    { name: "Hail of Blades", tree: "Domination" },
    { name: "Summon Aery", tree: "Sorcery" },
    { name: "Arcane Comet", tree: "Sorcery" },
    { name: "Phase Rush", tree: "Sorcery" },
    { name: "Grasp of the Undying", tree: "Resolve" },
    { name: "Aftershock", tree: "Resolve" },
    { name: "Guardian", tree: "Resolve" },
    { name: "Glacial Augment", tree: "Inspiration" },
    { name: "Unsealed Spellbook", tree: "Inspiration" },
    { name: "First Strike", tree: "Inspiration" }
];




// let runeInsert = runes.map(rune => ({ name: rune.name, tree: rune.tree, imageUrl: "" }));

// PrimaryRune.insertMany(runeInsert)
//     .then(function (docs) {
//         console.log('Items have been successfully stored.', docs);
//     })
//     .catch(function (err) {
//         console.log('Error occurred while storing items.', err);
//     });
