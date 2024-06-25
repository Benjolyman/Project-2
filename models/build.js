const mongoose = require('mongoose');

// const buildSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User', 
//         required: true
//     },
//     champion: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Champion',
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     }, 
//     items: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Item',
//         required: true
//     }],
//     primaryRune: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Rune',
//         required: true
//     }],
//     secondaryRune: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Rune',
//         required: true
//     }],
//     summonerSpells: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SummonerSpell',
//         required: true,
//     }],
// })


const buildSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    champion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    },
    role: {
        type: String,
    }, 
    items: [{
        type: String,
    }],
    primaryRune: {
        type: String,
    },
    secondaryRune: {
        type: String,
    },
    summonerSpells: [{
        type: String,
     
    }],
})
module.exports = mongoose.model('Build', buildSchema)