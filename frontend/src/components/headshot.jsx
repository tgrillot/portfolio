const Headshot = ({headshot, width, height, nav}) => {
    const headshotURL = import.meta.env.VITE_BACKEND_URL + headshot
    return (
        <img src={headshotURL} width={width} height={height} className={`rounded-full border-2 border-headerfooterlink shadow-xl ${nav ? "" : "hidden md:block"}`} />
    )
}

export default Headshot