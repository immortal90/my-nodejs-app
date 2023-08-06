"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotesRepository {
    constructor() {
        this.notes = [
            {
                id: "1",
                name: "Note 1",
                date: "2023-08-01",
                category: "Task",
                content: "Маю зубний прийом",
                archived: false,
            },
            {
                id: "2",
                name: "Note 2",
                date: "2023-08-02",
                category: "Random Thought",
                content: "Похід у гори",
                archived: false,
            },
            {
                id: "3",
                name: "Note 3",
                date: "2023-08-03",
                category: "Idea",
                content: "Пройти стажування",
                archived: false,
            },
            {
                id: "4",
                name: "Note 4",
                date: "2023-08-04",
                category: "Idea",
                content: "Влаштуватись працювати в RADENCY",
                archived: false,
            },
            {
                id: "5",
                name: "Note 5",
                date: "2023-08-05",
                category: "Idea",
                content: "Відвідати батьків",
                archived: false,
            },
            {
                id: "6",
                name: "Note 6",
                date: "2023-08-06",
                category: "Idea",
                content: "Гра у футбол",
                archived: false,
            },
            {
                id: "7",
                name: "Note 7",
                date: "2023-08-07",
                category: "Idea",
                content: "Поїздка у Київ",
                archived: false,
            },
        ];
    }
    getAllNotes() {
        return this.notes;
    }
    getNoteById(id) {
        const note = this.notes.find((note) => note.id === id);
        return note || null;
    }
    createNote(newNote) {
        this.notes.push(newNote);
        return newNote;
    }
    updateNoteById(id, updatedNote) {
        const index = this.notes.findIndex((note) => note.id === id);
        if (index === -1) {
            return null;
        }
        this.notes[index] = Object.assign(Object.assign({}, updatedNote), { id });
        return this.notes[index];
    }
    deleteNoteById(id) {
        const initialLength = this.notes.length;
        this.notes = this.notes.filter((note) => note.id !== id);
        return this.notes.length !== initialLength;
    }
}
exports.default = new NotesRepository();
