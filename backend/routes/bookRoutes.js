const express = require("express");
const router = express.Router();
const Book = require("../models/Book");


router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: "Error fetching books" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, description } = req.body;
        const newBook = new Book({ title, description });
        await newBook.save();
        res.status(201).json({ message: "Book added successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error adding book" });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting book" });
    }
});

module.exports = router;
