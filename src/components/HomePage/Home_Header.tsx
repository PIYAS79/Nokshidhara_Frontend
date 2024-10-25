import whiteLogo from '../../assets/white high.png'

const Home_Header = () => {
    return (
        <div>
            <div className="h-[62px] lightPurple text-[32px] flex justify-center items-center">
                সারাদেশে ক্যাশ অন হোম ডেলিভারী দেয়া হয়
            </div>
            <div className="h-[120px] deepPurple flex justify-center items-center">
                <img className='w-[175px]' src={whiteLogo}/>
            </div>
        </div>
    )
}

export default Home_Header
