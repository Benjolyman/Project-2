const mongoose = require('mongoose');

const buildSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    champion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Champion',
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }],
    summonerSpells: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SummonerSpell',
        required: true,
    }],
    patch: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Build', buildSchema)