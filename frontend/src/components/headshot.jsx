const Headshot = ({headshot, width, height, nav}) => {
    const headshotURL = import.meta.env.VITE_BACKEND_URL + headshot
    return (
        <img src={headshotURL} width={width} height={height} className={`rounded-full shadow-xl ${nav ? "border-2 border-headerfooterlink" : "w-56 h-56 m-3 border-4 border-link hidden md:block"}`} />
    )
}

export default Headshot