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
  },
});


const SecondaryRune = mongoose.model('SecondaryRune', runeSchema);

module.exports = SecondaryRune;


let runeTreeNames = [
  { name: "Precision", tree: "Precision" },
  { name: "Domination", tree: "Domination" },
  { name: "Sorcery", tree: "Sorcery" },
  { name: "Resolve", tree: "Resolve" },
  { name: "Inspiration", tree: "Inspiration" }
];


// const clearDB = async () => {
//   try {
//       await runeTreeNames.deleteMany({});
//       console.log('All documents in Build have been deleted');
//   } catch (error) {
//       console.log('Error clearing build model:', error);
//   }
// };

// clearDB();


// let runeInsert = runeTreeNames.map(rune => ({ name: rune.name, tree: rune.tree, imageUrl: "" }));

// SecondaryRune.insertMany(runeInsert)
//   .then(function (docs) {
//       console.log('Items have been successfully stored.', docs);
//   })
//   .catch(function (err) {
//       console.log('Error occurred while storing items.', err);
//   });
