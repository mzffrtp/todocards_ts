import { useState } from "react";
import { Note } from "./models/note.model";
import Header from "./components/header";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./components/notesList";
import CreateNotes from "./components/createNotes";

function App() {
  
  const [showModal, setShowModal] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI/UX",
      color: "#dfdfdf",
      date: new Date().toDateString(),
      is_done: false,
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5 position-relative">
        <Row>
          <Col>
            <NotesList
              notes={notes}
              setNotes={setNotes}
              setShowModal={setShowModal}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 z-3">
        <Row>
          <Col>
            {showModal && (
              <CreateNotes
                notes={notes}
                setNotes={setNotes}
                setShowModal={setShowModal}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
