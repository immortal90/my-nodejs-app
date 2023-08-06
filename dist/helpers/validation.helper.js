"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteExists = exports.isValidNote = void 0;
function isValidNote(note) {
    if (!note.name || !note.date || !note.category || !note.content) {
        return false;
    }
    return true;
}
exports.isValidNote = isValidNote;
function noteExists(notes, id) {
    return notes.some((note) => note.id === id);
}
exports.noteExists = noteExists;
