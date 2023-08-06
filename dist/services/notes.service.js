"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_repository_1 = __importDefault(require("../repositories/notes.repository"));
class NotesService {
    getAllNotes() {
        return notes_repository_1.default.getAllNotes();
    }
    getNoteById(id) {
        return notes_repository_1.default.getNoteById(id);
    }
    createNote(newNote) {
        return notes_repository_1.default.createNote(newNote);
    }
    updateNoteById(id, updatedNote) {
        return notes_repository_1.default.updateNoteById(id, updatedNote);
    }
    deleteNoteById(id) {
        return notes_repository_1.default.deleteNoteById(id);
    }
    getNotesStats() {
        const allNotes = notes_repository_1.default.getAllNotes();
        const totalNotes = allNotes.length;
        const totalArchivedNotes = allNotes.filter((note) => note.archived).length;
        return {
            totalNotes,
            totalArchivedNotes,
        };
    }
}
exports.default = NotesService;
