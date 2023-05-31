import { Note } from "@/models/note.model";
import Notes from "../notes";

interface INotesListProps {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList:React.FC<INotesListProps> = ({notes, setNotes}) => {
    const handleDelete = (id:string) => {
    setNotes(notes.filter(note => note.id !== id))  
    }
    const renderNotes = () => {
        return notes.map(note =>{
            return <Notes key={note.id} note = {note} handleDelete = {handleDelete} />
        })
    }
    return (
        <>
        <h2 className="my-3 d-flex justify-content-center">Notes</h2>
        <div>{renderNotes ()}</div>
        </>
    )
}

export default NotesList;