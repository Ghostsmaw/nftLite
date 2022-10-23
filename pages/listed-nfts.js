import React, { useState, useEffect, useContext } from "react";
import { NFTContext } from "../context/NFTContext";
import { NFTCard, Loader, NftCard } from "../components";
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

const ListedNFTs = () => {
  const { fetchMyNFTsOrListedNFTs } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imagesNft = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6, Nft7, Nft8, Nft9];

  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchItemsListed')
      .then((items) => {
        setNfts(items);
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

//   if(!isLoading && nfts.length === 0) {
//       return (
//           <div className="flexCenter sm:p-4 p-16 min-h-screen">
//               <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs Listed for Sale</h1>
//           </div>
//       )
//   }

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2
            className="font-poppins 
                    dark:text-white text-nft-black-1 
                    text-2xl font-semibold mt-2 ml-4
                    sm:ml-2"
          >
            NFTs Listed for Sale
          </h2>
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
      </div>
    </div>
  );
};

export default ListedNFTs;
