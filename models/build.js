const mongoose = require('mongoose');

const buildSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    champion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion'
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }, 
    starterItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StarterItems'
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    primaryRune: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PrimaryRune',
    },
    secondaryRune: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SecondaryRune',
    },
    summonerSpells: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SummonerSpell'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Build = mongoose.model('Build', buildSchema);
module.exports = Build

// const clearDB = async () => {
//     try {
//         await Build.deleteMany({});
//         console.log('All documents in Champion have been deleted');
//     } catch (error) {
//         console.log('Error clearing Champion model:', error);
//     }
// };

// clearDB();

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