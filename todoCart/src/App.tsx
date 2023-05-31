import { useState } from "react"
import { Note } from "./models/note.model"
import Header from "./components/header"
import { Col, Container, Row } from "react-bootstrap"
import NotesList from "./components/notesList"

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting with UI/UX",
    color: "#dfdfdf",
    date: (new Date).toDateString()
  }])
  return (
    <>
    <Header />
    <Container className="mt-5">
      <Row>
        <Col>
          <NotesList notes = {notes} setNotes = {setNotes} />
        </Col>
      </Row>
    </Container>
    </>
      
    )
}

export default App
