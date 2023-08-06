import { Note } from "../Note";

export function isValidNote(note: Note): boolean {
  if (!note.name || !note.date || !note.category || !note.content) {
    return false;
  }
  return true;
}
export function noteExists(notes: Note[], id: string): boolean {
  return notes.some((note) => note.id === id);
}
