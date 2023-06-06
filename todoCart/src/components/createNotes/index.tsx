import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Note } from "@/models/note.model";
import { toast } from "react-toastify";

interface ICreateNotes {
  notes: Note[];
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateNotes: React.FC<ICreateNotes> = ({
  notes,
  setNotes,
  setShowModal,
}) => {
  return (
    <Container
      className="border border-2 border-warning-subtle rounded shadow-lg w-75
    position-fixed top-50 start-50 translate-middle z-3"
      style={{ backgroundColor: "#F8F8FF" }}
    >
      <h2 className="text-center my-1"> Create Notes</h2>
      <div className="d-flex justify-content-center">
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const formDataJson = Object.fromEntries(formData.entries());

            console.log("formJsondata", formDataJson);
            

            if (!formDataJson.title as boolean ) {
              toast.error("All fields are mandatory!", {
                theme:"dark"
              });
              return
            }

            notes.push({
              id: new Date().toString(),
              title: formDataJson.title as string,
              text: formDataJson.textarea as string,
              color: formDataJson.color as string,
              date: new Date().toDateString() as string
            });
            setNotes([...notes]);
            console.log("notes", notes);
            
            toast.success("Note was succesfully created", {
              theme:"dark"
            })
            setShowModal(false);
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
