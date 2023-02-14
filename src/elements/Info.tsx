const Info:React.FC=()=>{
    return(
        <section className="lg:flex lg:flex-row flex-col py-16 lg:py-0 justify-center lg:-mt-16 px-10 lg:px-0 ">

        <section className="border-Brown lg:h-32 h-full lg:flex flex-row justify-around w-11/12 rounded-md items-center">
        <div className="flex flex-col w-64 pb-4 border-Header pt-8">
            <h1 className="text-xl font-semibold pb-2">Fast Delivery</h1>
            <p className="text-sm font-light">Next offers you fast delivery to any place in the world.</p>
        </div>
        <div className="lg:flex flex-col lg:w-96  w-80 lg:px-16 px-8 pb-4 lg:border-r-2 lg:border-l-2 border-Header pt-8">
        <h1 className="text-xl font-semibold pb-2">Free Returns</h1>
            <p className="text-sm font-light">On every shopping you make on our website you get free returns.</p>
        </div>
        <div className="flex flex-col w-64 pb-4 pt-8">
        <h1 className="text-xl font-semibold pb-2">24/7 Support</h1>
            <p className="text-sm font-light">We keep our clients happy by providing 24/7 customer support.</p>
        </div>
      </section>
      </section>

    )
}

export default Info