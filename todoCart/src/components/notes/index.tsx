import { Note } from '@/models/note.model';
import * as React from 'react';

interface INotesProps {
    note: Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
    <>
    <div>Note Card</div>
    </>
  )
};

export default Notes;
