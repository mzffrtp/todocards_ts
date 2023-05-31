import { useState } from "react"

function App() {

  const [notes, setNotes] = useState<{
    id:string,
    title:string,
    text:string,
    color:string,
    date:string
  }[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting with UI/UX",
    color: "#dfdfdf",
    date: (new Date).toDateString()
  }])
  return (
      <div className="App">app</div>
    )
}

export default App
