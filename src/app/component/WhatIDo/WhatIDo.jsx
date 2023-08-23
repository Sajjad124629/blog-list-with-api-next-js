import Image from "next/image";

const WhatIDo = () => {
    return (
        <div>
             <div className="pb-12">
                                <h3 className="text-[35px] dark:text-white font-medium pb-5"> What I do! </h3>
                                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    <div className="about-box dark:bg-transparent bg-[#fcf4ff] flex border-2 rounded-lg p-10">
                                        <Image className="w-10 h-10 object-contain block" width={40} height={40} src="/image/icons/icon.svg" alt="icon"/>
                                        <div className="space-y-2 ml-10">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Ui/Ux Design </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fefaf0] flex border-2 rounded-lg p-10">
                                    <Image className="w-10 h-10 object-contain block" width={40} height={40} src="/image/icons/icon1.svg" alt="icon"/>
                                        <div className="space-y-2 ml-10">
                                            <h3 className="dark:text-white text-2xl font-semibold"> App Development </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fcf4ff] flex border-2 rounded-lg p-10">
                                    <Image className="w-10 h-10 object-contain block" width={40} height={40} src="/image/icons/icon2.svg" alt="icon"/>
                                        <div className="space-y-2 ml-10">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Photography </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fff4f4] flex border-2 rounded-lg p-10">
                                    <Image className="w-10 h-10 object-contain block" width={40} height={40} src="/image/icons/icon3.svg" alt="icon"/>
                                        <div className="space-y-2 ml-10">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Photography </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#fff0f8] flex border-2 rounded-lg p-10">
                                    <Image className="w-10 h-10 object-contain block" width={40} height={40} src="/image/icons/icon4.svg" alt="icon"/>
                                        <div className="space-y-2 ml-10">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Managment </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>

                                    <div className="about-box dark:bg-transparent bg-[#f3faff] flex border-2 rounded-lg p-10">
                                    <Image className="w-10 h-10 object-contain block" width={40} height={40} src="/image/icons/icon5.svg" alt="icon"/>
                                        <div className="space-y-2 ml-10">
                                            <h3 className="dark:text-white text-2xl font-semibold"> Web Development </h3>
                                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default WhatIDo;