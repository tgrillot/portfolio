import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


axios.defaults.baseURL = import.meta.env.VITE_API_PROXY_URL

function App() {
  const [owner, setOwner] = useState(0);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: "/owner",
    }
    axios.request(options).then(function(response) {
      setOwner(response.data[0])
    }).catch(function (error) {
      console.error(error);
    })
  }, [])

  return (
    <>
      <div>
        {owner["sitename"]}
      </div>
    </>
  )
}

export default App
