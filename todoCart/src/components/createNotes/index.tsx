import React from "react";
import { Button, Container, Form } from "react-bootstrap";

interface ICreateNotes {}

const CreateNotes: React.FC<ICreateNotes> = ({ notes }) => {
  return (
    <Container className="border border-2 border-warning-subtle rounded shadow-lg">
      <h2 className="text-center my-1"> Create Notes</h2>
      <div className="d-flex justify-content-center">
        <Form className="my-3 w-75">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title for the note"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              placeholder="Enter text for the note"
              as="textarea"
              rows={2}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="colorInput">Note Color Picker</Form.Label>
            <Form.Control
              type="color"
              id="colorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="isDoneInput">Completed or Not</Form.Label>
            <Form.Check type="checkbox" value="" id="isDoneInput"></Form.Check>
          </Form.Group>
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CreateNotes;
