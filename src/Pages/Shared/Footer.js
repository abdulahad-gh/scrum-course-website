import React from 'react';

const Footer = () => {
    return (
        <footer class=" py-20 px-20 bg-[#27282B] text-base-content mt-20">
            <div className='flex gap-20 '>
                <div>
                    <span class="text-[24px] font-bold text-white">Logo</span>
                    <p className='text-[#8C8C8C] mt-2'>
                        We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                    </p>
                    <div className='flex justify-between items-center gap-20 mt-8'>
                        <div className='flex gap-3'>
                            <img src="https://i.ibb.co/Tw1T2bs/Button.png" alt="" />
                            <div>
                                <p className='text-[#8C8C8C]'>Have a question?</p>
                                <p className='text-white'><a href="#call">310-437-2766</a></p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <img src="https://i.ibb.co/0snWJNR/message-Button.png" alt="" />
                            <div>
                                <p className='text-[#8C8C8C]'>Contact us at</p>
                                <p className='text-white'><a href="#call">unreal@outlook.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <span class="text-[24px] font-bold text-white">Newsletter</span>
                        <p className='text-[#8C8C8C] mt-2'>
                            Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
                        </p>
                    </div>


                    <div class="w-full relative mt-8">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16  rounded-3xl" />
                        <button class="btn bg-[#537CE6] absolute top-0 right-0 rounded-3xl border-none px-8">Submit</button>
                    </div>


                </div>
            </div>


            <div className='text-[#8C8C8C] flex justify-between mt-14'>
                <a href="">About Us</a>
                <a href="">Jobs</a>
                <a href="">Blog</a>
                <a href="">Press</a>
                <a href="">FAQ</a>
                <a href="">Careers</a>
                <a href="">Contact</a>
                <a href="">Privacy policy</a>
                <a href="">Sitemap</a>
                <a href="">Terms of Use</a>
            </div>
            <div className='flex justify-between items-center mt-10'>
                <div className='flex gap-4'>
                    <img src="https://i.ibb.co/mJfDDp0/Mini-Button.png" alt="" />
                    <img src="https://i.ibb.co/FDQqTCP/youtube.png" alt="" />
                    <img src="https://i.ibb.co/sWQfdp4/ch.png" alt="" />
                    <img src="https://i.ibb.co/tPN3wN8/fi.png" alt="" />
                    <img src="https://i.ibb.co/p3L1grc/wh.png" alt="" />
                </div>
                <p className='text-[#8C8C8C]'>© 2000-2021, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;