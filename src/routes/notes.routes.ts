import express, { Request, Response } from "express";
import NotesService from "../services/notes.service";
import { Note } from "../Note";
import { createNoteSchema } from "../validationSchemas";

const router = express.Router();
const notesService = new NotesService();

// GET /notes/stats
router.get("/notes/stats", (req: Request, res: Response) => {
  const stats = notesService.getNotesStats();
  res.json(stats);
});

// GET /notes
router.get("/notes", (req: Request, res: Response) => {
  res.json(notesService.getAllNotes());
});

// POST /notes
router.post("/notes", (req: Request, res: Response) => {
  const { name, date, category, content, archived } = req.body;

  try {
    createNoteSchema.validateSync({
      name,
      date,
      category,
      content,
      archived,
    });

    const id = generateUniqueId();
    const newNote: Note = {
      id,
      name,
      date,
      category,
      content,
      archived,
    };

    notesService.createNote(newNote);
    res.json(newNote);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /notes/:id
router.delete("/notes/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const isDeleted = notesService.deleteNoteById(id);

  if (!isDeleted) {
    return res.status(404).send(`Note with ID ${id} not found!`);
  }

  res.send(`Note with ID ${id} deleted!`);
});

// PATCH /notes/:id
router.patch("/notes/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, date, category, content, archived } = req.body;

  try {
    createNoteSchema.validateSync({
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
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// GET /notes/:id
router.get("/notes/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const note = notesService.getNoteById(id);

  if (!note) {
    return res.status(404).send(`Note with ID ${id} not found!`);
  }
  res.json(note);
});

// GET /notes/stats
router.get("/notes/stats", (req: Request, res: Response) => {
  const stats = notesService.getNotesStats();
  res.json(stats);
});

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export { router as notesRoutes };
