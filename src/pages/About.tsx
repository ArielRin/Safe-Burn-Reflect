// pages/about.tsx
import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mainPagesStyles from "@/styles/MainPages.module.css";
import { useState } from "react";

export default function About() {
  const closeAll = () => {};

  return (
    <>
      <Head>
        <title>Safe Burn Reflect</title>
        <meta name="description" content="transparent and open with the community with no bullshit and unruggable contracts and a multisig gnosis safe wallet that will require trusted doxxed members of the crypto space to run" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Safeburnreflect" />
        <meta name="twitter:title" content="Safe Burn Reflect" />
        <meta name="twitter:description" content="transparent and open with the community with no bullshit and unruggable contracts and a multisig gnosis safe wallet that will require trusted doxxed members of the crypto space to run" />
        <meta name="twitter:image" content="https://monumental-donut-cd05a8.netlify.app/twitter.png" /> {/* Add the path to your image or logo */}
        <meta name="twitter:image:alt" content="Safe Burn Reflect Logo" />
      </Head>
      <Header />

      <main className={`${styles.main} ${mainPagesStyles.mainPages}`}>
        <div className={`${styles.wrapper} ${mainPagesStyles.wrapper}`}>
          <div className={styles.container}>
            <h1> Safe Burn Reflect Development in Progress </h1>
            <div className={styles.content}>
              <p>
          
              </p>
              <br /> {/* Added line break between paragraphs */}
              <p>

              </p>
              <br /> {/* Added line break between paragraphs */}
              <p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
