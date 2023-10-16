import AllButton from "./allbutton";
import gitea from '../assets/gitea.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import resume from '../assets/resume.svg';
import upwork from '../assets/upwork.svg';

const SocialBar = ({contact, footer, tea, hub, res, lin, up}) => {

    const resURL = import.meta.env.VITE_BACKEND_URL + res

    function handleSocialButtonClick(url){
        window.open(url, "_blank", "noreferrer")
    }

    return (
        <>               
            <AllButton social contact={contact} footer={footer} icon={linkedin} text="LinkedIn" OnAllButtonClick={()=>handleSocialButtonClick(lin)} />
            <AllButton social contact={contact} footer={footer} icon={gitea} text="Gitea" OnAllButtonClick={()=>handleSocialButtonClick(tea)} />
            <AllButton social contact={contact} footer={footer} icon={github} text="Github" OnAllButtonClick={()=>handleSocialButtonClick(hub)} />
            <AllButton social contact={contact} footer={footer} icon={upwork} text="Upwork" OnAllButtonClick={()=>handleSocialButtonClick(up)} />
            <AllButton social contact={contact} footer={footer} icon={resume} text="Resume" OnAllButtonClick={()=>handleSocialButtonClick(resURL)} />    
        </>
    )
}

export default SocialBar