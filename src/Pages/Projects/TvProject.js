import React from 'react';


const TvProject = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse px-2">
                    <img alt='' src="https://i.ibb.co/DKgMkrQ/Tv-Project-1.png" className="rounded-lg shadow-2xl md:w-1/2 scale-95" />
                    <div>
                        <h1 className="text-5xl font-bold">Admin Functionalities</h1>
                        <p className="py-6">This site has some admin functionalities. Such as:  </p>
                        <ul className='list-disc m-10 mt-0'>
                            <li>Only admin is capable of viewing all sellers, all buyers & reported items.</li>
                            <li>Admin can verify a seller </li>
                            <li>A user can be admin by an admin only.</li>
                            <li>Deleting a user is only performed by an admin.</li>
                        </ul>
                        <div className='flex justify-center'>
                            <a href="https://lantabur-tv-buy-sell-portal.web.app/" target='_blank' rel='noreferrer' className='btn btn-secondary'> Live Site </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src="https://i.ibb.co/YX6yBVS/Tv-Project-3.png" className="rounded-lg shadow-2xl md:w-1/2" />
                    <div className=' lg:ml-10'>
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