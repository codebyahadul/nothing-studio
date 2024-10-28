const clients = [
    { id: 1, image: '/img04.svg' },
    { id: 2, image: '/img05.svg' },
    { id: 3, image: '/img06.svg' },
    { id: 4, image: '/img07.svg' },
    { id: 5, image: '/img08.svg' },
    { id: 6, image: '/img09.svg' },
    { id: 7, image: '/img10.svg' },
    { id: 7, image: '/img10.svg' },
    { id: 7, image: '/img10.svg' },
    { id: 7, image: '/img10.svg' },
];

const OurClients = () => {
    return (
        <div className="p-8 bg-black text-[#d9d9d9]">
            <div className="flex">
                <div className="min-w-[25%]"></div>
                <div>
                    <div className='py-8 text-xl font-normal'>
                        <h1 className="w-5/12">We cherish partnerships we have cultivated, each one a testament to commitment.</h1>
                    </div>
                    <h1 className="text-xl font-normal my-8 pb-10">[ OUR Clients ]</h1>
                </div>
            </div>
            <div className="marquee overflow-hidden whitespace-nowrap bg-gray-800">
                <div className="marquee-inner inline-block animate-marquee">
                    {clients.map(item => (
                        <div key={item.id} className="inline-block mx-8"> {/* Tailwind classes for spacing */}
                            <img src={item.image} alt={`Client ${item.id}`} className="h-16" /> {/* Set image height */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClients;
