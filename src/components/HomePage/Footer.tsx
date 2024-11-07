import WhiteLogo from '../../assets/white high.png'

import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineMail, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className="deepPurple md:h-[240px] py-2 md:py-0">
                <div className='content_container mx-auto flex flex-col md:flex-row justify-between items-center h-full'>
                    <div className='text-white my-auto text-md'>
                        <div className='flex items-center gap-3'>
                            <AiOutlineMail className='text-xl' />
                            <p>nakshidhara@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-3 mt-2'>
                            <AiOutlinePhone className='text-xl' />
                            <p>017-547-98968</p>
                        </div>
                        <div className='flex items-center gap-3 mt-2'>
                            <AiOutlinePhone className='text-xl' />
                            <p>017-547-98968</p>
                        </div>
                    </div>
                    <div>
                        <img src={WhiteLogo} alt="" className='my-5 md:my-0 w-[100px] md:w-[265px]' />
                    </div>
                    <div>
                        <div className='text-white my-auto'>
                            <div className='flex justify-end items-center gap-3'>
                                <p>YouTube</p>
                                <AiOutlineYoutube className='text-xl ' />
                            </div>
                            <div className='flex justify-end items-center gap-3 mt-0 md:mt-2'>
                                <p>Facebook</p>
                                <AiOutlineFacebook className='text-xl' />
                            </div>
                            <div className='flex justify-end items-center gap-3 mt-0 md:mt-2'>
                                <p>WhatsApp</p>
                                <AiOutlineWhatsApp className='text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lightPurple h-[30px] md:h-[43px] flex justify-center items-center text-xs'>
                <Link to={'/login'}>
                    <p className='text-md text-gray-700 font-sans'>&copy; Copyright Nakshidhara 2024. All rights reserved.</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer
