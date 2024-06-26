const mongoose = require('mongoose');

const runeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    }
});

const PrimaryRune = mongoose.model('PrimaryRune', runeSchema);

module.exports = PrimaryRune;

// let runes = [
//     "Press the Attack", "Fleet Footwork", "Conqueror", 
//     "Electrocute", "Dark Harvest", "Hail of Blades", 
//     "Summon Aery", "Arcane Comet", "Phase Rush", 
//     "Grasp of the Undying", "Aftershock", "Guardian", 
//     "Glacial Augment", "Unsealed Spellbook", "First Strike" 
// ];

// let runeInsert = runes.map(rune => ({ name: rune, imageUrl: "" }));

// primaryRunes.insertMany(runeInsert)
//     .then(function (docs) {
//         console.log('Items have been successfully stored.', docs);
//     })
//     .catch(function (err) {
//         console.log('Error occurred while storing items.', err);
//     });
