import express from "express";
import BooksController from "../controllers/BookController.js";

const booksController = new BooksController();

const router = express.Router()

// Get all books
router.get('/allBooks', async (req, res) => {
    try {
        const books = await booksController.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new book
router.post('/create', async (req, res) => {
    console.log("Book Router", req.body);
    try {
        const book = await booksController.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// Get book by id
router.get('/:id', async (req, res) => {
    console.log("Given Id", req.params.id)
    try {
        const book = await booksController.getBookById(req.params);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update book by id
router.put('/:id', async (req, res) => {
    console.log("Given Id", req.params.id)
    try {
        const updatedBook = await booksController.updateBook(req.params.id, req.body);
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete book by id
router.delete('/:id', async (req, res) => {
    try {
        const book = await booksController.deleteBookById(req.params);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
export default router;