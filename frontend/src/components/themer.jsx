import { useState } from "react";

const Themer = () => {
    const [themeClass, setThemeClass] = useState()

    const colorThemes = [
        {id: 0, class:'theme-light', text:'Light'},
        {id: 1, class:'theme-dark', text:'Dark'},
        {id: 2, class:'theme-incredible', text:'Incredible'},
        {id: 3, class:'theme-sunny', text:'Sunny'},
        {id: 4, class:'theme-minty', text:"Minty"},
    ]
    
    function choiceClass(classID) {
        let classes = 'rounded-sm md:px-3 md:py-1 hover:text-headerfooterlinkhov';
        if (themeClass == colorThemes[classID].class) {
            classes = classes + ' text-a-hover'
        } else {
            classes = classes + ' text-headerfooterlink'
        }
        return classes;
    }

    function setTheme() {
        const themeWrapper = document.getElementById('themeWrapper')
        if (themeWrapper) {
            themeWrapper.className = themeClass
        }
    }

    function changeTheme(classID) {
        setThemeClass(colorThemes[classID].class)
        localStorage.setItem('themeClass', colorThemes[classID].class);
        setTheme()
    }

    if (!themeClass) {
        if (!localStorage.getItem('themeClass')) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setThemeClass(colorThemes[1].class)
            } else {
                setThemeClass(colorThemes[0].class)
            }
        } else {
            setThemeClass(localStorage.getItem('themeClass'));
        }
    }

    setTheme()

    return (
        <div className='group'>
            <a className="text-headerfooterlink hover:text-headerfooterlinkhov text-md no-underline ml-2 px-1 hidden md:block">
                <nobr>Theme
                    <svg className="inline-block mt-auto mb-auto fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </nobr>
            </a>
            <span className="md:hidden underline text-headerfooterlink">Theme</span>
            <ul className="rounded-md transform md:scale-0 group-hover:scale-100 bg-bgheadfoot md:absolute md:right-0 transition duration-150 ease-in-out md:origin-top content-center">
                {colorThemes.map((theme) => {
                    return (
                        <li key={theme["id"]} className="md:px-3 md:py-1 md:text-center">
                            <a className={choiceClass(theme["id"])} onClick={() => changeTheme(theme["id"])}>
                                {theme["text"]}
                            </a>
                        </li>
                    )})}
            </ul>
        </div>
    )
}

export default Themer