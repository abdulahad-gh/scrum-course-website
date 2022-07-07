import React from 'react';

const OurLearningProcess = () => {
    return (
        <section id='about' className='lg:py-8'>
            <div className='lg:flex lg:px-20 items-center'>
                <div className='flex-1 '>
                    <div>
                        <h1 className='lg:text-[32px] font-bold  text-[#9921E8]'>Start learning with <br /> us right now!</h1>
                        <p className='my-6  text-[18px]'>Choose from 100+ online video <br /> courses with new updates.</p>
                        <a className='btn btn-sm ml-1 px-8 bg-transparent mt-2 text-[#5F72BE] border-[#5F72BE] rounded-3xl' href="https://linkedin.com">ENROLL NOW</a>

                    </div>
                </div>
                <div className=' flex-1 flex items-center gap-6'>
                    <div>
                        <div className='flex gap-6 items-center'>
                            <p className='font-bold text-[#FFAD3B]'>Live
                                <br />
                                Exams</p>
                            <div className='bg-[#FFAD3B1A] w-[200px] relative h-[200px] rounded-full'>
                                <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="https://i.ibb.co/PTVDgvr/png-icon-4.png" alt="" />
                            </div>
                        </div>
                        <div className='flex gap-6 items-center my-10'>
                            <p className='font-bold text-[#2D81F7]'>Live <br />
                                Classes</p>
                            <div className='bg-[#FFAD3B1A] w-[200px] relative h-[200px] rounded-full'>
                                <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="https://i.ibb.co/4N2Z7Q7/Group-1.png" alt="" />
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>

                            <p className='font-bold text-[#FE5702]'>100 K+ <br />
                                Views</p>

                            <div className='bg-[#FFAD3B1A] w-[200px] relative h-[200px] rounded-full'>
                                <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="https://i.ibb.co/RgdpmXw/png-icon-1.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='flex gap-6 items-center'>
                            <p className='font-bold text-[#EB5757]'>1000+ <br />
                                Lessons</p>
                            <div className='bg-[#FFAD3B1A] w-[200px] relative h-[200px] rounded-full'>
                                <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="https://i.ibb.co/9TDB7rY/png-icon-3.png" alt="" />
                            </div>

                        </div>
                        <div className='flex gap-6 items-center mt-10'>
                            <p className='font-bold text-[#08BD80]'>1000+ <br />
                                Lessons</p>
                            <div className='bg-[#FFAD3B1A] w-[200px] relative h-[200px] rounded-full'>
                                <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src="https://i.ibb.co/Fs8NMsh/png-icon-2.png" alt="" />
                            </div>

                        </div>
                    </div>



                </div>

            </div>

        </section>



    );
};

export default OurLearningProcess;