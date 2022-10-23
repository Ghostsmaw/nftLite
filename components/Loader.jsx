import React from 'react';
import Image from 'next/image';
// import LoaderIcon from '../assets/nftlite_icon.png'
import LoaderIcon from '../assets/radar.gif';

const Loader = () => {
    return (
        <div className="flexCenter w-full my-4">
            <Image
                src={LoaderIcon}
                alt="loader"
                width={100}
                objectFit="contain"
            />
        </div>
    )
}

export default Loader
