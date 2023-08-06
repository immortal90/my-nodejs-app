import { Note } from "../Note";
import notesRepository from "../repositories/notes.repository";

class NotesService {
  public getAllNotes(): Note[] {
    return notesRepository.getAllNotes();
  }

  public getNoteById(id: string): Note | null {
    return notesRepository.getNoteById(id);
  }

  public createNote(newNote: Note): Note {
    return notesRepository.createNote(newNote);
  }

  public updateNoteById(id: string, updatedNote: Note): Note | null {
    return notesRepository.updateNoteById(id, updatedNote);
  }

  public deleteNoteById(id: string): boolean {
    return notesRepository.deleteNoteById(id);
  }

  public getNotesStats(): { totalNotes: number; totalArchivedNotes: number } {
    const allNotes = notesRepository.getAllNotes();
    const totalNotes = allNotes.length;
    const totalArchivedNotes = allNotes.filter((note) => note.archived).length;

    return {
      totalNotes,
      totalArchivedNotes,
    };
  }
}

export default NotesService;
