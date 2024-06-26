const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    }
});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;

let roleList = ["Top", "Jungle", "Middle", "Bottom", "Support"]


// let roleInsert = roleList.map(role => ({ name: role, imageUrl: "" }));

// Role.insertMany(roleInsert)
//   .then(function (docs) {
//       console.log('Items have been successfully stored.', docs);
//   })
//   .catch(function (err) {
//       console.log('Error occurred while storing items.', err);
//   });



