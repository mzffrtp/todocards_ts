import { Note } from "@/models/note.model";
import Notes from "../notes";
import { Button, Container } from "react-bootstrap";
import addnote from "@/assets/pin.gif";
import { toast } from "react-toastify";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const NotesList: React.FC<INotesListProps> = ({
  notes,
  setNotes,
  setShowModal,
 
}) => {
  const handleDelete = (id: string) => {
    console.log("dleted id", id);
    setNotes(notes.filter((note) => note.id !== id));
    toast.success("Note was deleted succesfully!")
    
  };
  const renderNotes = () => {
    return notes.map<JSX.Element>((note) => {
      return (
        <Notes
          key={note.id}
          note={note}
          handleDelete={handleDelete}
        />
      );
    });
  };
  return (
    <>
      <h2 className="my-3 d-flex justify-content-center">Notes</h2>
      <Container
        className="d-flex justify-content-center mb-3"
        onClick={() => {
          setShowModal(true)
        }}
      >
        <Button variant="outline-warning" className="w-50 fs-3">
          Click to add{" "}
          <img
            src={addnote}
            style={{ width: "3.5rem", borderRadius: "1rem" }}
          />
        </Button>
      </Container>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
