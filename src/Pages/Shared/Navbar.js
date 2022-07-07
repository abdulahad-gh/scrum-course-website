import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li><a href='/'>HOME</a></li>
        <li><a>ABOUT</a></li>
        <li><a>COURSES</a></li>
        <li><a>BLOGS</a></li>


    </>
    return (
        <div style={{ background: 'radial-gradient(50% 50% at 50% 50%, #5F72BE 0%, #9921E8 100%)' }} class="navbar  flex flex-row-reverse lg:flex-row lg:px-20 text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }

                    </ul>
                </div>
                <div > <img className='' src="https://i.ibb.co/W5qRHF9/scrum.png" alt="" />

                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">

                    {
                        menuItems
                    }
                </ul>

            </div>
            <div class="navbar-end hidden lg:flex">
                <a href='login' class="btn btn-sm px-8  bg-transparent border-none rounded-3xl">LOGIN</a>
                <a href='login' class="btn btn-sm ml-1 px-8 bg-transparent border-white rounded-3xl ">SIGN UP</a>


            </div>
        </div>
    );
};

export default Navbar;