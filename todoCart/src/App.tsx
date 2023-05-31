import { useState } from "react"
import { Note } from "./models/note.model"
import Header from "./components/header"

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
    <div className="App">app</div>
    </>
      
    )
}

export default App
