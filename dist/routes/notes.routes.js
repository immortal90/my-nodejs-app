"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const notes_service_1 = __importDefault(require("../services/notes.service"));
const validationSchemas_1 = require("../validationSchemas");
const router = express_1.default.Router();
exports.notesRoutes = router;
const notesService = new notes_service_1.default();
// GET /notes/stats
router.get("/notes/stats", (req, res) => {
    const stats = notesService.getNotesStats();
    res.json(stats);
});
// GET /notes
router.get("/notes", (req, res) => {
    res.json(notesService.getAllNotes());
});
// POST /notes
router.post("/notes", (req, res) => {
    const { name, date, category, content, archived } = req.body;
    try {
        validationSchemas_1.createNoteSchema.validateSync({
            name,
            date,
            category,
            content,
            archived,
        });
        const id = generateUniqueId();
        const newNote = {
            id,
            name,
            date,
            category,
            content,
            archived,
        };
        notesService.createNote(newNote);
        res.json(newNote);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// DELETE /notes/:id
router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const isDeleted = notesService.deleteNoteById(id);
    if (!isDeleted) {
        return res.status(404).send(`Note with ID ${id} not found!`);
    }
    res.send(`Note with ID ${id} deleted!`);
});
// PATCH /notes/:id
router.patch("/notes/:id", (req, res) => {
    const id = req.params.id;
    const { name, date, category, content, archived } = req.body;
    try {
        validationSchemas_1.createNoteSchema.validateSync({
            name,
            date,
            category,
            content,
            archived,
        });
        const note = notesService.getNoteById(id);
        if (!note) {
            return res.status(404).send(`Note with ID ${id} not found!`);
        }
        note.name = name;
        note.date = date;
        note.category = category;
        note.content = content;
        note.archived = archived;
        res.json(note);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// GET /notes/:id
router.get("/notes/:id", (req, res) => {
    const id = req.params.id;
    const note = notesService.getNoteById(id);
    if (!note) {
        return res.status(404).send(`Note with ID ${id} not found!`);
    }
    res.json(note);
});
// GET /notes/stats
router.get("/notes/stats", (req, res) => {
    const stats = notesService.getNotesStats();
    res.json(stats);
});
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}
