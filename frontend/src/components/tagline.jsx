const Tagline = ({taglines, nav}) => {
    let taglineText = ""
    if (taglines) {
        taglineText = taglines[Math.floor(Math.random() * taglines.length)]
    }
    return (
        <span className={`${nav ? "text-xs text-headerfooterlink" : "hidden md:block grow italic text-2xl text-link"}`}>{taglineText}</span>
    )
}
export default Tagline