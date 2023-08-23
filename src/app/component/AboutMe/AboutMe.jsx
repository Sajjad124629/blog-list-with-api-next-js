import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import { FaCalendarDays, FaEnvelopeOpenText, FaLocationDot } from "react-icons/fa6";

const AboutMe = () => {
    return (
        <div>
            <div className="py-12">
                {/* <!-- about page title --> */}
                <h2 className="after-effect after:left-52 mt-12 lg:mt-0 text-xl dark:text-white font-medium"> About Me </h2>
                <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                    <div className="col-span-12 md:col-span-4">
                        {/* <!-- about me image --> */}
                        <Image className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0" width={330} height={400} src="/image/sajjad.png" alt="about image"/>
                    </div>
                    <div className="col-span-12 md:col-span-8 space-y-2.5">
                        {/* <!-- who am i content  --> */}
                        <div className="md:mr-12 xl:mr-16">
                            <h3 className="text-4xl font-medium dark:text-white mb-2.5"> I Am Sajjad Hossain</h3>
                            <p className="text-gray-lite dark:text-color-910 leading-7"> I am Creative
                                Director and UI/UX Designer from Sydney, Australia, working in web
                                development and print media. I enjoy turning complex problems into
                                simple, beautiful and intuitive designs. </p>
                            <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910"> My aim is to
                                bring across your message and identity in the most creative way. I
                                created web design for many famous brand companies. </p>
                        </div>

                        {/* <!-- personal info --> */}
                        <div>
                            <h3 className="text-4xl font-medium my-5 dark:text-white"> Personal Info </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex">
                                    <span className={`socialbtn bg-[#f0f8ff38] text-[#e22267] dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12`}>
                                    <FaMobileAlt/>
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910"> Phone
                                        </p>
                                        <h6 className="font-medium dark:text-white"> +8801684067842 </h6>
                                    </div>
                                </div>

                                <div className="flex">
                                    <span className="text-oriange-lite text-[#d94d77]  bg-[#f0f8ff38] dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <FaLocationDot/>
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910"> Location
                                        </p>
                                        <h6 className="font-medium dark:text-white"> Khulna, Bangladesh </h6>
                                    </div>
                                </div>

                                <div className="flex">
                                    <span className="text-green text-[#22c2e2] bg-[#f0f8ff38] dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <FaEnvelopeOpenText/>
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910"> Email
                                        </p>
                                        <h6 className="font-medium dark:text-white">sajjadhossain121360@gmail.com</h6>
                                    </div>
                                </div>

                                <div className="flex">
                                    <span className="text-color-50 text-[#d161bd] bg-[#f0f8ff38] dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <FaCalendarDays/>
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-lite dark:text-color-910"> Birthday
                                        </p>
                                        <h6 className="font-medium dark:text-white"> April 30, 1999 </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;