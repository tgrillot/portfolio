import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/home';
import Skills from './pages/skills';
import Skill from './pages/skill';
import Projects from './pages/projects';
import Project from './pages/project';
import Contact from './pages/contact';
import NavBar from './components/navbar'
import Footer from './components/footer'
import SocialBar from "./components/socialbar";
import balloon from './assets/balloon.svg';
import { ReactSVG } from "react-svg";


axios.defaults.baseURL = import.meta.env.VITE_API_PROXY_URL

const SBMain = ({tea, hub, res, lin, up, windowSize}) => {
  useNavigate()
  
  const [showSB, setShowSB] = useState(windowSize.matches ? true : false)
  const pathname = window.location.pathname

  const handleBalloonClick = () => {
    setShowSB(!showSB)
  }

  if (pathname !== "/contact") {
      return (
        <>
          <div className='z-50 flex flex-col gap-y-3 justify-center md:justify-start m-1 fixed right-3 bottom-4 md:left-0 md:inset-y-1/2 md:right-auto md:self-center md:bottom-auto'>
            <div className={`${showSB ? "" : "hidden"} flex items-center flex-col md:items-start md:place-items-center gap-y-3`}>
              <SocialBar tea={tea} hub={hub} res={res} lin={lin} up={up} />
            </div>
            <button className="w-16 h-16 p-3 rounded-full bg-actionbutton p-2 text-white md:hidden shadow-xl" onClick={handleBalloonClick}>
              <ReactSVG src={balloon} />
            </button>
          </div>
        </>
      )
  } else {
      return ""
  }
}

function App() {
  const [owner, setOwner] = useState([]);

  const windowSize = window.matchMedia("(min-width:768px)")

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
      <div id='themeWrapper'>
        <div id='bodyWrapper' className='flex flex-col min-h-screen overflow-x-hidden bg-bgbody text-deftext'>
          <header>
            <NavBar sitename={owner["sitename"]} headshot={owner["headshot"]} taglines={owner["taglines"]} windowSize={windowSize} />
          </header>
          <main className='flex-grow items-center w-full md:w-3/4 m-auto'>
            <SBMain tea={owner["gitea"]} hub={owner["github"]} res={owner["resume"]} lin={owner["linkedin"]} up={owner["upwork"]} windowSize={windowSize} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/skills/:slug" element={<Skill />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<Project />} />
              <Route path="/contact" element={<Contact tea={owner["gitea"]} hub={owner["github"]} res={owner["resume"]} lin={owner["linkedin"]} up={owner["upwork"]} />} />
            </Routes>
          </main>
          <footer>
            <Footer tea={owner["gitea"]} hub={owner["github"]} res={owner["resume"]} lin={owner["linkedin"]} up={owner["upwork"]} />
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
