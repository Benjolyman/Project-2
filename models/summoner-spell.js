const mongoose = require('mongoose');

const summonerSpellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: String,
});

const SummonerSpell = mongoose.model('SummonerSpell', summonerSpellSchema);

module.exports = SummonerSpell;

// let summs = ["Heal", "Ghost", "Barrier", "Exhaust", "Clarity", "Flash", "Teleport", "Smite", "Cleanse", "Ignite"]


// let summsInsert = summs.map(summ => ({name: summ, imageUrl: ""}));

// SummonerSpell.insertMany(summsInsert)
//     .then(function (docs) {
//         console.log('success', docs);
//     })
//     .catch(function (err) {
//         console.log('Error', err);
//     })


