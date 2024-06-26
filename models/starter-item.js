const mongoose = require('mongoose');

const starterItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String
    }
});

const StarterItems = mongoose.model('StarterItems', starterItemsSchema);

module.exports = StarterItems;

let starterItemsList = [
    { name: "Cull", id: 1083 },
    { name: "Doran's Blade", id: 1055 },
    { name: "Doran's Ring", id: 1056 },
    { name: "Doran's Shield", id: 1054 },
    { name: "Long Sword", id: 1036 },
    { name: "Sapphire Crystal", id: 1027 },
    { name: "Tear of the Goddess", id: 3070 },
    { name: "Dark Seal", id: 1082 },
    { name: "Scorchclaw Pup", id: 1101 },
    { name: "Mosstomper Seedling", id: 1103 },
    { name: "Gustwalker Hatchling", id: 1102 }
];


// let starteritemInsert = starterItemsList.map(item => ({ name: item.name, id: item.id , imageUrl: "" }));

// StarterItems.insertMany(starteritemInsert)
//     .then(function (docs) {
//         console.log('Items have been successfully stored.', docs);
//     })
//     .catch(function (err) {
//         console.log('Error occurred while storing items.', err);
//     });


