import React from 'react';

const Banner = () => {
    return (
        <div className='w-full lg:py-8 ' style={{ background: 'radial-gradient(50% 50% at 50% 50%, #5F72BE 0%, #9921E8 100%)' }} >
            <div className='lg:flex lg:px-20 '>
                <div className='flex-1 '>
                    <div>
                        <h1 className='lg:text-[14px] bg-white rounded-xl text-center inline-block p-1 px-2 text-[#9921E8]'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</h1>
                        <p className='my-6 text-white text-[36px] font-bold'>Unleash Your SCRUM Skills, <br /> Grab More Attention To Résumé</p>
                        <a className='btn btn-sm ml-1 px-8 bg-transparent border-white rounded-3xl' href="https://linkedin.com">ENROLL NOW</a>
                        <div className='text-white p-20 relative'>
                            <p className='pl-5'>10% OFF on all courses* | Offer Valid For</p>
                            <div className='w-[32px] h-2 border-t-2 absolute left-[228px] mt-1'></div>
                            <div className='flex gap-8 mt-4'>
                                <p className='w-[88px] h-[88px] rounded-md leading-none text-center pt-2' style={{ background: 'rgba(255, 255, 255, 0.1)' }}><span className='font-bold text-[54px]'>02  </span> <br />
                                    Hrs.</p>
                                <p className='w-[88px] h-[88px] rounded-md leading-none text-center pt-2' style={{ background: 'rgba(255, 255, 255, 0.1)' }}><span className='font-bold text-[54px]'>58  </span> <br />
                                    Mins.</p>
                                <p className='w-[88px] h-[88px] rounded-md leading-none text-center pt-2' style={{ background: 'rgba(255, 255, 255, 0.1)' }}><span className='font-bold text-[54px]'>42  </span> <br />
                                    Secs.</p>



                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex-1'>

                    <div className='relative'>
                        <img className='w-[88px] absolute top-[44px] left-[362px] h-[88px] object-cover inline-block ' src="https://i.ibb.co/9q5cXP9/Ellipse-4.png" alt="frame" />

                        <img className='w-[128px] absolute top-[104px] left-[200px] h-[128px] object-cover inline-block ' src="https://i.ibb.co/Rcb42y7/Ellipse-3.png" alt="frame" />

                        <img className='w-[228px] h-[228px] absolute top-[260px] left-[37px]  object-cover inline-block' src="https://i.ibb.co/thYN2D4/Ellipse-2.png" alt="frame" />
                    </div>


                </div>
                <img className='w-[460px]  h-[460px]  object-cover z-40 block absolute left-[970px] top-[240px]  rounded-full ' src="https://i.ibb.co/C7KNn8v/Ellipse-1.png" alt="frame" />
            </div>

        </div>



    );
};

export default Banner;