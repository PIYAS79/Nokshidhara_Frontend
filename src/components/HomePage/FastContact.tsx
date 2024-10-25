import Whatsapp from '../../assets/whatsapp.png'
import Messenger from '../../assets/messenger.png'


const FastContact = () => {
    return (
        <div className='text-[32px] content_container mx-auto my-10'>
            <div className='flex justify-center'>
                <button className='rounded-xl deepPurple text-white text-[32px] w-[456px] py-3 font-extrabold'>
                    <img width={46} src={Whatsapp} alt="" className='inline mr-5' />
                    হোয়াটসঅ্যাপ অর্ডার</button>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='rounded-xl deepPurple text-white text-[32px] w-[456px] py-3 font-extrabold'>
                    <img width={46} src={Messenger} alt="" className='inline mr-5' />
                    মেসেঞ্জার অর্ডার</button>
            </div>
            <p className="text-center font-extrabold mt-14">আমাদের যে কোন পণ্য অর্ডার করতে কল  করুনঃ</p>
            <p className="text-center font-extrabold mt-6 font-sans text-[36px]">+017-547-98968</p>
            <p className="text-center font-extrabold mt-6">এছারাও সুবিধার্থে থাকছেঃ</p>
            <ul className="flex flex-col items-center mt-3">
                <li><span className="mr-4">•</span> রিটার্ন পলিসি</li>
                <li><span className="mr-4">•</span> রিফান্ড পলিসি</li>
            </ul>
            <hr className="block mt-10" />
        </div>
    )
}

export default FastContact
