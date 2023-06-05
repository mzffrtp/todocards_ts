import * as React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Note } from "@/models/note.model";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <>
      <div className="mb-3 d-flex justify-content-center">
        <Card className="p-1 w-75" style={{ backgroundColor: note.color }}>
          <Card.Body>
            <Card.Title>Title: {note.title}</Card.Title>
            <Card.Text>Note: {note.text}</Card.Text>
            <Card.Text>Date: {note.date}</Card.Text>
            <Container className="d-flex justify-content-center">
              <Button
                className="w-25 mt-1"
                variant="outline-danger"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Notes;
