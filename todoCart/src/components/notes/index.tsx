import { Note } from "@/models/note.model";
import * as React from "react";
import { Button, Card, Container } from "react-bootstrap";

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
            <Card.Subtitle>Completed: {note.is_done}</Card.Subtitle>

            <Container className="d-flex justify-content-between my-2">
              <Button
                className="w-25 mt-1"
                variant="outline-danger"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </Button>
              <Button className="w-25 mt-1" variant="outline-warning">
                Edit
              </Button>
              <Button className="w-25 mt-1" variant="outline-success">
                Done
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Notes;
