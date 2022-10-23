import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { NFTContext } from "../context/NFTContext";
import { NFTCard, Loader, NftCard, Banner } from "../components";
import BannerImage from "../assets/banner-image.jpg";

const MyNft = () => {
    const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTContext)
    const [nfts, setNfts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
          <div className="flexStart min-h-screen">
            <Loader />
          </div>
        );
      }

    return (
        <div className="w-full flex justify-start items-center flex-col min-h-screen">
          <div className="w-full flexCenter flex-col">
            <Banner 
                name="Your Nifty NFTs"
                childStyles="text-center mb-4"
                parentStyles="h-80 justify-center"
            />
          </div>
        </div>
    )
}

export default MyNft;
