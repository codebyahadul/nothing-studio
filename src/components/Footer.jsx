const Footer = () => {
    return (
        <div className="bg-[#0d0d0d] px-4 md:px-8 pt-12 pb-8">
            <div className="flex flex-col md:flex-row text-[#d9d9d9] gap-5 md:gap-0 text-sm md:text-xl">
                <div className="flex-1 flex flex-col md:flex-row gap-5 justify-between">
                    <div className="flex-1">
                        <h3>WE ARE NOTHING, <br />
                            BUT SOMETHING ELSE!</h3>
                    </div>
                    <div className="flex-1">
                        <h3>We strive for the extraordinary in every project fueled by a tremendous <br /> passion for design.</h3>
                    </div>
                </div>
                <div className="flex-1 flex justify-normal md:justify-end">
                    <div className="text-start">
                        <button>HELLO@NOTHING.STUDIO</button>
                        <h1>+44 12 34 56 78</h1>
                    </div>
                </div>
            </div>
            <div className="w-full my-2 md:my-0">
                <h1 className="text-6xl md:text-[20.37rem] w-full font-bold uppercase text-start md:text-center text-[#212121]">Nothing</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start md:items-center">
                <div className="text-[#d9d9d9] text-sm md:text-xl flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 *:uppercase">
                    <button>Privacy Policy</button>
                    <button>Cookie Policy</button>
                </div>
                <div className="text-[#d9d9d9] text-sm md:text-xl flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 *:uppercase">
                    <button>Linkedin</button>
                    <button>Twitter</button>
                    <button>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;