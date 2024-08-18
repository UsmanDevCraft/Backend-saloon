// const mongoose = require('mongoose');

// // Define the salon schema
// const salonSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     latitude: Number,  // Store latitude
//     longitude: Number, // Store longitude
//     // Other fields like phone number, services offered, etc. can be added here
// });

// // Create a geospatial index on the location field
// salonSchema.index({ location: '2dsphere' });

// // Create and export the model
// const Salon = mongoose.model('Salon', salonSchema);
// module.exports = Salon;








// const mongoose = require('mongoose');

// // Define the salon schema
// const salonSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     location: {
//         type: { type: String, enum: ['Point'], default: 'Point' },
//         coordinates: { type: [Number], index: '2dsphere' } // Index for geospatial queries
//     }
//     // Other fields like phone number, services offered, etc. can be added here
// });

// // Create and export the model
// const Salon = mongoose.model('Salon', salonSchema);
// module.exports = Salon;








// const mongoose = require('mongoose');

// // Define the salon schema
// const salonSchema = new mongoose.Schema({
//     name: String,
//     address: String,
//     latitude: Number,  // Store latitude
//     longitude: Number, // Store longitude
//     location: {
//         type: { type: String },
//         coordinates: [Number]
//     }
// });

// // Create a geospatial index on the location field
// salonSchema.index({ location: '2dsphere' });

// // Create and export the model
// const Salon = mongoose.model('Salon', salonSchema);
// module.exports = Salon;








const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number]
    }
});

salonSchema.index({ location: '2dsphere' });

const Salon = mongoose.model('Salon', salonSchema);
module.exports = Salon;

