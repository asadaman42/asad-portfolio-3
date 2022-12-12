import React from 'react';


const TvProject = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-[url('https://i.ibb.co/DKgMkrQ/Tv-Project-1.png')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src="https://i.ibb.co/YX6yBVS/Tv-Project-3.png" className="rounded-lg shadow-2xl md:w-1/2" />
                    <div>
                        <h1 className="text-5xl font-bold">Buyer Safety</h1>
                        <p className="py-6">If the seller is not verified by an admin,</p>
                        <ul className='list-disc m-8 mt-0'>
                            <li>Buyers will not see blue verified sign beside of the seller name.</li>
                            <li>Buyers will not see the "Book Now" Button.</li>
                            <li>So, the buyers actually cannot book item of an unverified seller.</li>
                        </ul>
                        
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src="https://i.ibb.co/SVyLt7k/Tv-Project-2.png" className="rounded-lg shadow-2xl md:w-1/2" />
                    <div>
                    <h1 className="text-5xl font-bold">Seller Facilities</h1>
                        <p className="py-6">A seller can have the following facilities: </p>
                        <ul className='list-disc m-8 mt-0'>
                            <li>Seller can add as many products as e wants. </li>
                            <li>Seller can view all of his her product. </li>
                            <li>If the seller wishes, he can advertise product if the product is still unsold. </li>
                            <li>Along with that, a seller can delete his product(s) if he changes his decission. </li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvProject;