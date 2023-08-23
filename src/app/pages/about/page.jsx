import AboutMe from '@/app/component/AboutMe/AboutMe';
import WhatIDo from '@/app/component/WhatIDo/WhatIDo';
import React from 'react';

const About = () => {
    return (
        <>
            <div>
                <div>
                    <div className="container  mt-20 dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
                        <div data-aos="fade" className="aos-init aos-animate">

                            <AboutMe />
                            <WhatIDo />




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;