const mongoose = require ('mongoose');

const ChampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    builds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Build', 
    }]
});

module.exports = mongoose.model('Champion', ChampSchema)