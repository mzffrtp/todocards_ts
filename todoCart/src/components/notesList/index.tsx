import { Note } from "@/models/note.model";
import Notes from "../notes";

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {
  const renderNotes = () => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} />;
    });
  };
  return (
    <>
      <h2 className="my-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
