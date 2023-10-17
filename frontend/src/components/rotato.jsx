import { useState, useEffect } from "react";
import axios from "axios";


const Rotato = () => {
    const [skills, setSkills] = useState([])
    const [skillIndex, setSkillIndex] = useState(0)

    function getLastSkill() {
        if (skillIndex === 0) {
            return skills.length - 1
        } else {
            return skillIndex - 1
        }
    }

    const rotateSkill = () => {
        let activeSkill = document.getElementById("skill" + skillIndex)
        if (activeSkill) {
            activeSkill.classList.remove("hidden")
        }

        let inactiveSkill = document.getElementById("skill" + getLastSkill())
        if (inactiveSkill) {
            inactiveSkill.classList.add("hidden")
        }

        if (skillIndex === skills.length - 1) {
            setSkillIndex(0)
        } else {
            setSkillIndex(skillIndex + 1)
        }
    }

    useEffect(() => {
        const options = {
          method: 'GET',
          url: "/skills",
        }
        axios.request(options).then(function(response) {
          setSkills(response.data)
        }).catch(function (error) {
          console.error(error)
        })
      }, [])

    useEffect(() => {
        const interval = setInterval(() => {rotateSkill()}, 2000);
        return () => clearInterval(interval);
    }, [skillIndex])

    return (
        <div className="relative">
            {skills.map((skill, index) => {
                return (
                    <div key={index} id={"skill" + index} className="rotato absolute top-0 md:-top-16 left-10 hidden transition">
                        <a href={`/skills/` + skill["slug"]} className="md:text-3xl xl:text-5xl bg-link px-4 py-1 md:px-6 md:py-2 mx-2 rounded-full text-white leading-8 shadow-lg hover:text-white hover:transition-all ease-in-out duration-300 hover:scale-110">
                            <nobr>{skill["name"]}</nobr>
                        </a>
                    </div>
            )})}
        </div>
    )
}

export default Rotato