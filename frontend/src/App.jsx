import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [owner, setOwner] = useState(0);

  function testAPI() {
    axios.get("/api/owner/")
      .then(response => {
        setOwner(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  testAPI()

  return (
    <>
      <div>
        {owner["sitename"]}
      </div>
    </>
  )
}

export default App
