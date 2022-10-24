import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { NFTContext } from "../context/NFTContext";
import { NFTCard, Loader, NftCard, Banner, SearchBar } from "../components";
import BannerImage from "../assets/banner-image.jpg";
import Profile from "../assets/profile-test6.jpg";
import { shortenAddress } from "../utils/shortenAddress";
import Nft1 from "../assets/nft1.png";
import Nft2 from "../assets/nft2.jpeg";
import Nft3 from "../assets/nft3.jpeg";
import Nft4 from "../assets/nft4.jpeg";
import Nft5 from "../assets/nft5.jpeg";
import Nft6 from "../assets/nft6.jpeg";
import Nft7 from "../assets/nft7.webp";
import Nft8 from "../assets/nft8.jpeg";
import Nft9 from "../assets/nft9.png";
import { makeId } from "../utils/makeId";

const MyNft = () => {
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imagesNft = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6, Nft7, Nft8, Nft9];
  const [activeSelect, setActiveSelect] = useState("Recently Added");

  useEffect(() => {
    fetchMyNFTsOrListedNFTs().then((items) => {
      setNfts(items);
      setNftsCopy(items);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  const onHandleSearch = (value) => {
    const filteredNfts = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNfts.length) {
      setNfts(filteredNfts);
    } else {
      setNfts(filteredNfts);
    }
  };

  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Your Nifty NFTs"
          childStyles="text-center mb-4"
          parentStyles="h-80 justify-center"
        />

        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter w-40 h-40 sm:w-36 sm:h-36 p-1 bg-nft-black-2 rounded-full">
            <Image
              src={Profile}
              width={250}
              height={250}
              objectFit="cover"
              className="rounded-full object-cover"
            />
          </div>
          <p
            className="font-poppins dark:text-white 
                text-nft-black-1 font-semibold text-2xl mt-6"
          >
            {shortenAddress(currentAccount)}
          </p>
        </div>
      </div>

      {isLoading && nfts.length ? (
        <div className="flexCenter sm:p-4 p-16">
          <h1
            className="font-poppins dark:text-white 
                text-nft-black-1 font-extrabold text-3xl"
          >
            No NFTs Owned
          </h1>
        </div>
      ) : (
        <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
          <div className="flex-1 w-full flex flex-row sm:flex-col px-4 xs:px-0 minlg:px-8 ">
            <SearchBar
              activeSelect={activeSelect}
              setActiveSelect={setActiveSelect}
              handleSearch={onHandleSearch}
            //   clearSearch={onClearSearch}
            />
          </div>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {nfts.map((nft) => (
              <NFTCard key={nft.tokenId} nft={nft} />
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <NftCard
                key={`nft-${i}`}
                nft={{
                  i,
                  image: imagesNft[i],
                  name: `Nifty NFT ${i}`,
                  price: 10 - i * 0.5,
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  description: "Cool NFT for sale",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyNft;
