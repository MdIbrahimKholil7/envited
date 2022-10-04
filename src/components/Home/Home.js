import React from 'react';
import landingImg from '../../assets/image 1.png'
import btnImg from '../../assets/btn.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="hero min-h-screen bg-[#F6F2FF] pt-8">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <div>
                        <img className='md:w-[540px]' src={landingImg} alt='homeImg' />
                        <button
                            onClick={() => navigate('/create')}
                            className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] py-[16px] rounded-[10px] block lg:hidden mx-auto"
                        >
                            <img className='px-[21px]' src={btnImg} alt="" />
                        </button>
                    </div>
                    <div className='text-center lg:text-right lg:mb-0 mb-[55px] lg:pr-5'>
                        <div className="lg:text-5xl md:text-[30px] xs:text-[36px] font-bold">
                            <span
                                className='block md:text-[64px]  text-[36px] text-[#240D57] font-bold leading-[100%]'>Imagine if</span>
                            <span
                                className='block md:text-[64px]  text-[36px] bg-gradient-to-r text-transparent bg-clip-text from-[#8456EC] to-[#E87BF8] leading-[100%]
                                
                                '
                            >
                                Snapchat
                            </span>
                            <span
                                className='block md:text-[64px]  text-[36px] text-[#240D57] font-bold leading-[100%]'>had events.</span>
                        </div>
                        <p className="py-6 text-[#4F4F4F] text-center lg:text-right text-[16px] md:text-[24px]  md:px-40 lg:px-0 lg:w-full lg:pl-80">Easily host and share events with your friends across any social media.</p>
                        <div className='flex justify-end items-center'>
                            <button
                                onClick={() => navigate('/create')}
                                className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] py-[16px] rounded-[10px] hidden lg:block"
                            >
                                <img className='px-[21px]' src={btnImg} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;