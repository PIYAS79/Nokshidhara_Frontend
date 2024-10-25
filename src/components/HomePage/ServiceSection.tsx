import Pay from '../../assets/pay.svg'
import Stiching from '../../assets/stiching.svg'
import Delevary from '../../assets/delevary.svg'

const ServiceSection = () => {
    return (
        <div className="bg-[#D9D9D9] py-24">
            <div className='max-w-[45%] mx-auto'>
                <div className='flex justify-between mb-[40px]'>
                    <div className='mr-[190px]'>
                        <img src={Pay} width={130} alt="" />
                    </div>
                    <div className='text-center w-[60%]'>
                        <h1 className='text-[64px] font-extrabold'>নিরাপদ পেমেন্ট</h1>
                        <p className='text-[24px] font-light'>বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন</p>
                    </div>
                </div>
                <div className='flex justify-between mb-[40px]'>
                    <div className='mr-[190px]'>
                        <img src={Delevary} width={130} alt="" />
                    </div>
                    <div className='text-center w-[60%]'>
                        <h1 className='text-[64px] font-extrabold'>গ্রিন ডেলিভারি</h1>
                        <p className='text-[24px] font-light'>৩-৫ দিনের মধ্যে আপনার পণ্য পৌছে যাবে</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='mr-[190px]'>
                        <img src={Stiching} width={130} alt="" />
                    </div>
                    <div className='text-center w-[60%]'>
                        <h1 className='text-[64px] font-extrabold'>১০০% নির্ভরযোগ্য</h1>
                        <p className='text-[24px] font-light'>উন্নতমানের সুতি কাপড় দিয়ে হাতে সেলাই করা</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
