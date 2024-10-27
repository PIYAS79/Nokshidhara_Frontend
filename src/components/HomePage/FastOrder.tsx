import { Link } from "react-router-dom"


const FastOrder = () => {
    return (
        <div className='mt-20 mb-10 content_container mx-auto'>
            <hr className='block' />
            <div className='my-10 text-center font-extrabold'>
                <p className='text-[32px]'>বেবি নকশীকাঁথা ও চেক পিন্ট কাঁথা ১০ পিস ২ টি ইউরিন ম্যাট কম্বো প্যাকেজ।</p>
                <p className='text-[32px]'>বেবি নকশীকাঁথা ও  চেক পিন্ট কাঁথা ৬ পিস ১ টি ইউরিন ম্যাট কম্বো প্যাকেজ।</p>
            </div>
            <div className='flex justify-center'>
                <Link to={'/order'}>
                <button className='rounded-xl deepPurple text-white text-[32px] px-24 py-3 font-extrabold'>অর্ডার করতে চাই</button>
                </Link>
            </div>
            <hr className='block mt-10' />
        </div>
    )
}

export default FastOrder
