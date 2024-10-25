

const HeroSection = () => {
    return (
        <div className="content_container h-[500px] deepPurple mx-auto mt-10">
            <div className="carousel w-full h-full">
                <div id="item1" className="carousel-item w-full ">
                    <img 
                        src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785752/dogs-5021084_1280_xsbjtw.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785751/puppy-5124947_1280_jah2xz.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785751/animal-7220153_1280_losnoc.jpg"
                        className="w-full object-cover" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785751/animal-4118585_1280_avrssk.jpg"
                        className="w-full object-cover" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs deepPurple text-white">1</a>
                <a href="#item2" className="btn btn-xs deepPurple text-white">2</a>
                <a href="#item3" className="btn btn-xs deepPurple text-white">3</a>
                <a href="#item4" className="btn btn-xs deepPurple text-white">4</a>
            </div>
        </div>
    )
}

export default HeroSection
