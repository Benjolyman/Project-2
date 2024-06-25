const mongoose = require('mongoose');

const runeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});


const SecondaryRune = mongoose.model('SecondaryRune', runeSchema);

module.exports = SecondaryRune;


// let runeTreeNames = ["Precision", "Domination", "Sorcery", "Resolve", "Inspiration"];

// let runeInsert = runeTreeNames.map(rune => ({ name: rune, imageUrl: "" }));

// secondaryRunes.insertMany(runeInsert)
//   .then(function (docs) {
//       console.log('Items have been successfully stored.', docs);
//   })
//   .catch(function (err) {
//       console.log('Error occurred while storing items.', err);
//   });
