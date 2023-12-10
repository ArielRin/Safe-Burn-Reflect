import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import mainPagesStyles from "@/styles/MainPages.module.css";

export default function Home() {

 const closeAll = () => {
	};
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
				<meta
					name="description"
					content="Generated by create-wc-dapp"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header

	/>

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>

					<div className={styles.container}>
						<h1>Tokens of Project </h1>
						<div className={styles.content}>
							<ul>
								<li>
							 TODO:
								</li>
  								<li>
  							 Tokenomics and features of token
  								</li>
    								<li>
    							 Why are ppl going to buy it
    								</li>
      								<li>
                      display main taxes and reflections
      								</li>
        								<li>
                        Main Advantages and additional features that make it standout
        								</li>
          								<li>
                          Closing Summarry of how fkn great it is
          								</li>

							</ul>
						</div>
					</div>
					<div className={styles.footer}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							height={16}
							width={16}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
							/>
						</svg>
						<a
							href="https://docs.walletconnect.com/web3modal/react/about?utm_source=next-starter-template&utm_medium=github&utm_campaign=next-starter-template"
							target="_blank"
						>
							Made By Degen Haus Devs 2023
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
