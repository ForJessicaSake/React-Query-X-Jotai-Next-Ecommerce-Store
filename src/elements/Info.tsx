const Info:React.FC=()=>{
    return(
        <section className="lg:flex hidden justify-center -mt-16">

        <section className="bg-Brown h-32 lg:flex flex-row justify-around w-11/12 rounded-md items-center">
        <div className="flex flex-col w-52 pb-4">
            <h1 className="text-2xl font-semibold pb-2">Fast Delivery</h1>
            <p className="text-sm font-light">Furniture offers you fast delivery to any place in the world.</p>
        </div>
        <div className="flex flex-col w-52 pb-4">
        <h1 className="text-2xl font-semibold pb-2">Free Returns</h1>
            <p className="text-sm font-light">On every shopping you make on our website you get free returns.</p>
        </div>
        <div className="flex flex-col w-52 pb-4">
        <h1 className="text-2xl font-semibold pb-2">24/7 Support</h1>
            <p className="text-sm font-light">We keep our clients happy by providing 24/7 customer support.</p>
        </div>
      </section>
      </section>

    )
}

export default Info