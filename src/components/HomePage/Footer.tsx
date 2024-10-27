import WhiteLogo from '../../assets/white high.png'

import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineMail, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className="deepPurple h-[240px]">
                <div className='content_container mx-auto flex justify-between items-center h-full'>
                    <div className='text-white my-auto'>
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
                        <img width={265} src={WhiteLogo} alt="" />
                    </div>
                    <div>
                        <div className='text-white my-auto'>
                            <div className='flex justify-end items-center gap-3'>
                                <p>YouTube</p>
                                <AiOutlineYoutube className='text-xl ' />
                            </div>
                            <div className='flex justify-end items-center gap-3 mt-2'>
                                <p>Facebook</p>
                                <AiOutlineFacebook className='text-xl' />
                            </div>
                            <div className='flex justify-end items-center gap-3 mt-2'>
                                <p>WhatsApp</p>
                                <AiOutlineWhatsApp className='text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lightPurple h-[43px] flex justify-center items-center'>
                <Link to={'/login'}>
                    <p className='text-md text-gray-700 font-sans'>&copy; Copyright Nakshidhara 2024. All rights reserved.</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer
