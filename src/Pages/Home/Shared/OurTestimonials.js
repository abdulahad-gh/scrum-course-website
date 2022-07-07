import React from 'react';

const OurTestimonials = () => {
    return (
        <section id='blog' className='lg:px-20 mt-20'>
            <div className='flex items-center gap-16'>
                <h2 className='font-bold text-[#5F72BE]'>OUR TESTIMONIALS</h2>
                <div className='border-b-2 w-[300px]  border-[#5F72BE]'></div>
            </div>
            <div className='flex  items-center justify-center mt-16'>

                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src="https://i.ibb.co/M2sQ53W/unsplash-ZHv-M3-XIOHo-E.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div className='w-44'>
                        <img class="w-[125px] h-[125px]  rounded-full" src="https://i.ibb.co/KwHhmZJ/unsplash-Oh-KEl-Ok-Q3-RE.png" />
                    </div>
                </div>

                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src="https://i.ibb.co/y6bJWKd/unsplash-m-EZ3-Po-FGs-k.png" />
                    </div>
                </div>
            </div>
            <div className='flex gap-60 items-center'>
                <span><img className='w-8 h-5' src="https://i.ibb.co/qx7Js5J/right.png" alt="" /></span>
                <div className='text-center'>
                    <p className='font-semibold'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <div className='text-[#9921E8] mt-4'>
                        <h4 className='font-bold'>
                            Md. Danish Ansari
                        </h4>
                        <p>Learner, Govt. Employee @UPPCL</p>
                    </div>
                </div>
                <span><img className='w-8 h-5' src="https://i.ibb.co/tcQBWzy/left.png" alt="" /></span>
            </div>
            <div className='bg-[#5F72BE] px-10 py-6 rounded-lg flex justify-between items-center mt-20'>
                <div className='text-white'>
                    <h2>Email Us</h2>
                    <p>Connect with us in case of any queries, complaints or feedbacks...</p>
                </div>
                <button className='btn bg-[#2D81F7] px-20 border-none'>CONTACT US</button>

            </div>

        </section>
    );
};

export default OurTestimonials;