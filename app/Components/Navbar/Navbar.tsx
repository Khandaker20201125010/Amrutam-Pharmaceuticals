import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY; // Get the current scroll position
            setIsNavbarAtTop(scrollY === 0); // Navbar is at the top if scrollY is 0
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#FFF7E2' }} className=" sticky backdrop-blur-lg bg-opacity-75 h-[93px] top-0 z-50 shadow-bottom-shadow">
            <div className="navbar bg-transparent">
                <div className="navbar-start fixed z-30 md:hidden">
                    <div className="flex mx-10 gap-5 lg:gap-10 justify-center items-center">
                        {/* Burger Icon */}
                        <div onClick={handleClick} className="icon-wrapper">
                            {click ? (
                                <AiOutlineClose
                                    size={30}
                                    className="text-xl text-blue-300 lg:text-2xl cursor-pointer"
                                />
                            ) : (
                                <SlMenu
                                    size={30}
                                    className="text-xl lg:text-2xl text-blue-300 font-bold cursor-pointer"
                                />
                            )}
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div
                        className={`fixed top-0 left-0 w-[550px] max-sm:w-[320px] h-full bg-base-200 transition-transform duration-500 ease-in-out z-50 ${click ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        {/* Fixed Header in Burger Menu */}
                        <div className="sticky top-0 bg-gradient-to-br from-blue-900  to-blue-900  px-4 py-3 md:py-4 border-b border-white ">
                            <div className="text-2xl font-bold flex justify-between items-center">
                                <a
                                    onClick={closeMenu}
                                    className="hover:text-orange-500 cursor-pointer border-2 border-white"
                                >
                                    <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer text-blue-500" />
                                </a>
                                <h1 className="text-2xl lg:text-3xl text-blue-300">K.I.H</h1>
                            </div>
                        </div>

                        {/* Scrollable Content with Hidden Scrollbar */}
                        <ul
                            className="overflow-y-scroll p-4 space-y-6 text-center text-3xl min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black "
                            style={{
                                maxHeight: "calc(100vh - 64px)",
                                scrollbarWidth: "none" /* For Firefox */,
                                msOverflowStyle: "none" /* For Internet Explorer and Edge */,
                            }}
                        >
                            {/* Hide Scrollbar for WebKit Browsers */}
                            <style>{`
                  ul::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                            asdasd
                        </ul>
                    </div>

                    {/* Background Shadow (Overlay) */}
                    {click && (
                        <div
                            className="min-h-screen fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
                            onClick={closeMenu} // Close menu when clicking on the overlay
                        ></div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;