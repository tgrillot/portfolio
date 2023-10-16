import classNames from 'classnames';
import { ReactSVG } from "react-svg";

const AllButton = ({footer, social, contact, home, project, icon, text, OnAllButtonClick}) => {
    const btnClasses = classNames({
        'text-white':true,
        'hover:text-white':true,
        'p-2':true,
        'font-semibold':true,
        'text-lg':true,
        'align-middle':true,
        'rounded-sm':true,
        'drop-shadow-md':true,
        'inline-flex':true,
        'items-center':true,
        'space-x-2':true,
        'group':true,
        'hover:transition-all':true,
        'ease-in-out':true,
        'duration-300':true,
        'hover:scale-110':project || footer || contact || (contact && social),
        'md:hover:w-32':social && !contact && !footer,
        'w-9':social && !contact && !footer,
        'w-full':(home && project) || (footer && !social),
        'md:w-32':social && contact,
        'lg:w-full':(!home && project),
        'w-3/4':footer && !social,
        'bg-link':!footer && !social,
        'bg-headerfooterlink':footer,
        'bg-actionbutton':!footer && social,
    })

    const spnClasses = classNames({
        'grow':true,
        'text-center':true,
        'leading-none':project || social,
        'mx-2':project || social,
        'h-5':project || social,
        'block':project && home,
        'md:block':social && contact && !footer,
        'hidden':(social && footer) || (social && contact),
        'invisible':social && !contact && !footer,
        'md:group-hover:visible':social && !contact && !footer,
        'md:hidden':project && !home,
        'lg:block':project && !home,
    })

    const buttonIcon = () => {
        if (icon){
            return (
                <ReactSVG src={icon} wrapper="span" className="flex grow group-hover" />
            )
        }
    }

    return (
        <button className={btnClasses} onClick={OnAllButtonClick}>
            {buttonIcon()}
            <span className={spnClasses}>
                {text}
            </span>
        </button>
    )
}

export default AllButton