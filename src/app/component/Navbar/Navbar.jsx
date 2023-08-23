import PostCategory from '@/app/api/PostCategory';
import Link from 'next/link';
import React from 'react';

const Navbar =  async () => {
    const categoryPostDatas = await PostCategory();
    return (
        <div>
           <div>
                <div className="navbar fixed z-50 top-0 shadow bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href="/">হোম</Link></li>
                                <li><Link href="/pages/about">এবাউট </Link></li>
                                <li><Link href="/pages/contact">কন্টাক্ট  </Link></li>
                                {/* Fetch all post Category Data In Menu */}
                                {
                                    categoryPostDatas.map(categoryPostData=>(
                                        <li key={categoryPostData.id}><Link href={`/pages/blog/${categoryPostData.id}`}>{categoryPostData.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link href="/" className="btn btn-ghost normal-case text-xl">MR-BLOG</Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li ><Link href="/">হোম</Link></li>
                        <li><Link href="/pages/about">এবাউট </Link></li>
                        <li><Link href="/pages/contact">কন্টাক্ট  </Link></li>

                             {/* Fetch all post Category Data In Menu */}
                             {
                                    categoryPostDatas.map(categoryPostData=>(
                                        <li key={categoryPostData.id}><Link href={`/pages/blog/${categoryPostData.id}`}>{categoryPostData.name}</Link></li>
                                    ))
                                }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;