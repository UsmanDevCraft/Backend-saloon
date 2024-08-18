// const express = require('express');
// const router = express.Router();
// const Salon = require('../model/SaloonSchema');

// router.get('/salons/nearby', async (req, res) => {
//     const { latitude, longitude } = req.query;

//     if (!latitude || !longitude) {
//         return res.status(400).json({ error: 'Latitude and longitude are required' });
//     }

//     try {
//         // Perform a geospatial query to find nearby salons
//         const salons = await Salon.find({
//             location: {
//                 $geoNear: {
//                     $geometry: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
//                     $maxDistance: 10000 // Maximum distance in meters (e.g., 10 km)
//                 }
//             }
//         });

//         res.json(salons);
//     } catch (error) {
//         console.error("Error finding nearby salons: ", error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// module.exports = router;













const express = require('express');
const router = express.Router();
const Salon = require('../model/SaloonSchema');

// router.get('/salons/nearby', async (req, res) => {
//     const { latitude, longitude } = req.query;

//     if (!latitude || !longitude) {
//         return res.status(400).json({ error: 'Latitude and longitude are required' });
//     }

//     try {
//         // Perform a geospatial query to find nearby salons
//         const salons = await Salon.aggregate([
//             {
//                 $geoNear: {
//                     near: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
//                     distanceField: 'distance',
//                     maxDistance: 10000, // Maximum distance in meters (e.g., 10 km)
//                     spherical: true
//                 }
//             }
//         ]);

//         res.json(salons);
//     } catch (error) {
//         console.error("Error finding nearby salons: ", error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });







// router.get('/salons/nearby', async (req, res) => {
//     const { latitude, longitude } = req.query;

//     if (!latitude || !longitude) {
//         return res.status(400).json({ error: 'Latitude and longitude are required' });
//     }

//     try {
//         const salons = await Salon.find({
//             location: {
//                 $near: {
//                     $geometry: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
//                     $maxDistance: 10000 // Maximum distance in meters (e.g., 10 km)
//                 }
//             }
//         });

//         res.json(salons);
//     } catch (error) {
//         console.error("Error finding nearby salons: ", error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });










// router.get('/salons/nearby', async (req, res) => {
//     const { latitude, longitude } = req.query;

//     if (!latitude || !longitude) {
//         return res.status(400).json({ error: 'Latitude and longitude are required' });
//     }

//     try {
//         const salons = await Salon.find({
//             location: {
//                 $geoNear: {
//                     $geometry: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
//                     $maxDistance: 10000 // Max distance in meters
//                 }
//             }
//         });

//         res.json(salons);
//     } catch (error) {
//         console.error("Error finding nearby salons: ", error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

















router.get('/salons/nearby', async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const salons = await Salon.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[parseFloat(longitude), parseFloat(latitude)], 10 / 6378.1] // Radius in kilometers
                }
            }
        });

        res.json(salons);
    } catch (error) {
        console.error("Error finding nearby salons: ", error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

