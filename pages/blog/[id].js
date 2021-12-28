import React from 'react';
import Head from 'next/head';
import Navbar from "@components/navbar";
import Footer from "@components/footer";

export default function Blog() {
  return (
    <div className='py-5'>
      <Head>
        <title>Detail Blog</title>
        <meta name="description" content="Detail content Blog Spindyzel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className=''>

      </main>

      <Footer />
    </div>
  )
}
