const express = require("express");
const router = express.Router();
const Bookmodel = require("../model/Appointment")

router.post("/bookAppointment", async (req, res) => {
    try {
        const { title, date, time } = req.body;
        let book = new Bookmodel({
            title: title,
            date: date,
            time: time
        });
        const savedBook = await book.save();
        res.json({ savedBook });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;