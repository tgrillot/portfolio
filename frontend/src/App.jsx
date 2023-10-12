import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/home';
import Skills from './pages/skills';
import Skill from './pages/skill';
import Projects from './pages/projects';
import Project from './pages/project';
import Contact from './pages/contact';
import NavBar from './components/navbar'

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
      <div id='themeWrapper' className='theme-dark'>
        <div id='bodyWrapper' className='flex flex-col min-h-screen overflow-x-hidden bg-bgbody text-deftext'>
          <header>
            <NavBar sitename={owner["sitename"]} headshot={owner["headshot"]} />
          </header>
          <main className='flex-grow items-center w-full md:w-3/4 m-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/skills/:slug" element={<Skill />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer>

          </footer>
        </div>
      </div>
    </>
  )
}

export default App
