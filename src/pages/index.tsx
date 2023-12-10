import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useContractRead } from 'wagmi'
import { writeContract } from '@wagmi/core'
import mainPagesStyles from "@/styles/MainPages.module.css";
import ContractABI from "@/components/ContractABI";
import { useState } from "react";

const CONTRACT_ADDRESS = '0x42142d58a5a4d7fAc22Fd2D3b5DBf46B04D5d16e';
const getExplorerLink = () => `https://bscscan.com/token/${CONTRACT_ADDRESS}`;
const getOpenSeaURL = () => `https://opensea.io/assets/bsc/${CONTRACT_ADDRESS}`;
const getTofuNFTURL = () => `https://opensea.io/assets/bsc/${CONTRACT_ADDRESS}`;

export default function Home() {
  const { data: contractData, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'name',
  });

  const { data: symbol, isError: symbolError, isLoading: symbolLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'symbol',
  });

  const { data: cost, isError: costError, isLoading: costLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'cost',
  });

  const { data: totalSupply, isError: totalSupplyError, isLoading: totalSupplyLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ContractABI,
    functionName: 'totalSupply',
  });


  return (
    <>
      <Head>
        <title>Defi Derby | #1 Raceday AMA on BSC</title>
        <meta name="description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement.  #DefiDerby #BSC #DeFi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lastm3042" />
        <meta name="twitter:title" content="Defi Derby - #1 Raceday AMA on BSC" />
        <meta name="twitter:description" content="Explore the thrilling world of Defi Derby, the number 1 raceday AMA on BSC. Join the revolution in decentralized finance and experience a new era of racing and community engagement. #DefiDerby #BSC #DeFi" />
        <meta name="twitter:image" content="https://monumental-donut-cd05a8.netlify.app/twitter.png" /> {/* Add the path to your image or logo */}
        <meta name="twitter:image:alt" content="Defi Derby Logo" />




      </Head>

      <Header />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={mainPagesStyles.centeredButton}>
          <Link href="/About">
            <div>
              <button className={mainPagesStyles.enterAppButton}>Enter App</button>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
