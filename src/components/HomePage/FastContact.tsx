import Whatsapp from '../../assets/whatsapp.png'
import Messenger from '../../assets/messenger.png'


const FastContact = () => {
    return (
        <div className='text-[1rem] md:text-[2rem] content_container mx-auto my-5 md:my-10 md:px-0'>
            <div className='flex justify-center'>
                <a href="https://wa.me/017-54798968" target="_blank" rel="noopener noreferrer">
                    <button className='rounded-xl deepPurple text-white text-[1rem] md:text-[2rem] w-[375px] py-2 md:py-3 font-extrabold'>
                        <img src={Whatsapp} alt="" className='inline mr-5 w-[20px] md:w-[46px]' />
                        হোয়াটসঅ্যাপ অর্ডার
                    </button>
                </a>
            </div>
            <div className='flex justify-center mt-5 md:mt-10'>
                <a href="https://m.me/rafeerawshony.rizvee" target="_blank" rel="noopener noreferrer">
                    <button className='rounded-xl deepPurple text-white text-[1rem] md:text-[2rem] w-[375px] py-2 md:py-3 font-extrabold'>
                        <img src={Messenger} alt="" className='inline mr-5 w-[20px] md:w-[46px]' />
                        মেসেঞ্জার অর্ডার
                    </button>
                </a>
            </div>
            <p className="text-center font-extrabold mt-5 md:mt-14">আমাদের যে কোন পণ্য অর্ডার করতে কল করুনঃ</p>
            <p className="text-center font-extrabold mt-0 md:mt-6 font-sans text-[1.5rem] md:text-[36px]">+017-547-98968</p>
            <p className="text-center font-extrabold mt-2 md:mt-6">এছারাও সুবিধার্থে থাকছেঃ</p>
            <ul className="flex flex-col items-center mt-1 md:mt-3">
                <li><span className="mr-4">•</span> রিটার্ন পলিসি</li>
                <li><span className="mr-4">•</span> রিফান্ড পলিসি</li>
            </ul>
            <hr className="block mt-5 md:mt-10" />
        </div>
    )
}

export default FastContact
