import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/white high.png'

const Home_Header = () => {
    return (
        <div>
            <div className="h-[30px] md:h-[62px] lightPurple text-[1rem] md:text-[2rem] flex justify-center items-center">
                সারাদেশে ক্যাশ অন হোম ডেলিভারী দেয়া হয়
            </div>
            <div className="h-[60px] md:h-[120px] deepPurple flex justify-center items-center">
                <Link to={'/'}>
                    <img className='w-[90px] md:w-[175px]' src={whiteLogo} />
                </Link>
            </div>
        </div>
    )
}

export default Home_Header
