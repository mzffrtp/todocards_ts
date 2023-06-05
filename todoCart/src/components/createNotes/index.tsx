import React from "react";
import { Button, Container, Form } from "react-bootstrap";

interface ICreateNotes {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateNotes: React.FC<ICreateNotes> = ({
  notes,
  setNotes,
  setShowModal,
}) => {
  return (
    <Container className="border border-2 border-warning-subtle rounded shadow-lg w-75">
      <h2 className="text-center my-1"> Create Notes</h2>
      <div className="d-flex justify-content-center">
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());

            notes.push({
              id: formJson.id,
              title: formJson.title,
              text: formJson.textarea,
              color: formJson.olor,
              date: formJson.Date,
              is_done: formJson.Date,
            });

            setNotes([...notes])
            setShowModal(false)
          
          }}
          className="my-3 w-75"
        >
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter title for the note"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              name="textarea"
              placeholder="Enter text for the note"
              as="textarea"
              rows={2}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="colorInput">Note Color Picker</Form.Label>
            <Form.Control
              name="color"
              type="color"
              id="colorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="isDoneInput">Completed or Not</Form.Label>
            <Form.Check
              name="is_done"
              type="checkbox"
              value=""
              id="isDoneInput"
            ></Form.Check>
          </Form.Group>
          <Container className="d-flex gap-3 justify-content-center">
            <Button type="submit" variant="outline-success">
              Submit
            </Button>
            <Button variant="danger" onClick={() => setShowModal(false)}>
              Go back
            </Button>
          </Container>
        </Form>
      </div>
    </Container>
  );
};

export default CreateNotes;
