
import Image from "next/image";
const ContactPage = () => {
    return (
        <div>
            <div className="container px-4 sm:px-5 md:px-10 lg:px-20 mt-20">
                <div className="py-12">
                    <h2 className="after-effect after:left-40 mb-[40px] mt-12 lg:mt-0 dark:text-white font-medium text-2xl">Contact</h2>
                    <div className="lg:flex gap-x-20">
                        {/* <!-- personal contact information --> */}
                        <div className="w-full lg:w-[35%] xl:w-[25%] space-y-6">
                            <div className="flex flex-wrap bg-[#fcf4ff]  dark:bg-black p-[30px] dark:border-[#212425] border-2 gap-2 rounded-xl">
                                <span className="w-8 mt-2">
                                    <Image className="w-10 h-10 object-contain block" width={32} height={32} src="/image/contact/phone-call.png" alt="icon" />
                                   
                                </span>
                                <div className="space-y-2 ml-5">
                                    <p className="text-xl font-semibold dark:text-white"> Phone : </p>
                                    <p className="text-gray-lite text-lg dark:text-[#A6A6A6]"> +8801684067842 </p>
                                    <p className="text-gray-lite text-lg dark:text-[#A6A6A6]"> +8801642667615 </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap dark:bg-black bg-[#eefbff] p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl">
                                <span className="w-8 mt-2">
                                <Image className="w-10 h-10 object-contain block" width={32} height={32} src="/image/contact/email.png" alt="icon" />
                                  
                                </span>
                                <div className="space-y-2 ml-5">
                                    <p className="text-xl font-semibold dark:text-white"> Email : </p>
                                    <p className="text-gray-lite text-lg dark:text-[#A6A6A6]"> support@gmail.com
                                    </p>
                                    <p className="text-gray-lite text-lg dark:text-[#A6A6A6]"> example@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap dark:bg-black bg-[#f2f4ff] p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl">
                                <span className="w-8 mt-2">
                                <Image className="w-10 h-10 object-contain block" width={32} height={32} src="/image/contact/map.png" alt="icon" />
                                  
                                </span>
                                <div className="space-y-2 ml-5">
                                    <p className="text-xl font-semibold dark:text-white"> Address : </p>
                                    <p className="text-gray-lite text-lg dark:text-[#A6A6A6]"> Maount View, Oval
                                    </p>
                                    <p className="text-gray-lite text-lg dark:text-[#A6A6A6]"> Road, New York,
                                        USA </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                            <div data-aos="fade" className="dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate">
                                <h3 className="text-4xl">
                                    <span className="text-gray-lite dark:text-[#A6A6A6]">I am always open to
                                        discussing product</span>
                                    <br />
                                    <span className="font-semibold dark:text-white">design work or
                                        partnerships.</span>
                                </h3>

                                <form id="myForm" action="" method="POST">
                                    {/* <!-- name input --> */}
                                    <div className="relative z-0 w-full mt-[40px] mb-8 group">
                                        <input type="text" id="name" name="name" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required="" />
                                        <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name
                                            *</label>
                                    </div>

                                    {/* <!-- email input  --> */}
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="email" name="user_email" className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="user_email" required="" />
                                        <label for="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email
                                            *</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="text" name="website" className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="website" required="" />
                                        <label for="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Website
                                            *</label>
                                    </div>

                                    {/* <!-- massage input --> */}
                                    <div className="relative z-0 w-full mb-8 group">
                                        <input type="text" name="message" className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " id="message" required="" />
                                        <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message
                                            *</label>
                                    </div>

                                    <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                                        {/* <!-- submit buttons --> */}
                                        <input type="submit" className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;