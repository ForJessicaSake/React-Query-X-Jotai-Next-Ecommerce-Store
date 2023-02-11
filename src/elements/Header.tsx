import headerImage from "../assets/headerimg.png"
const Header=()=>{
    return(
        <header className="flex flex-col items-center pt-0 mt-0  relative">
            <h1 className="z-50 lg:text-header text-9xl font-extralight ">NEXT</h1>
            <figure className="flex justify-center w-screen lg:px-10 relative lg:bottom-64 bottom-8">
            <img src={headerImage} alt="fashion model" className=" h-full w-full  rounded-full"/>
            </figure>
        </header>
    )
}

export default Header