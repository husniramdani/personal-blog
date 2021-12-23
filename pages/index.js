import Head from 'next/head'
// import Image from 'next/image'
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Home() {
  return (
    <div className='py-10 h-screen flex flex-col justify-between'>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Personal Blog Spindyzel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='flex flex-col h-152'>
        <h1 className='text-center underline font-bold text-3xl'>Latest Updates</h1>
        <ScrollContainer className='relative flex flex-nowrap mt-8 ml-24 h-full overflow-x-auto space-x-1'>
          <div className='w-100 flex-none h-full bg-gray-300'>1</div>
          <div className='w-100 flex-none h-100 bg-gray-300'>2</div>
          <div className='w-100 flex-none h-full bg-gray-300'>3</div>
          <div className='w-100 flex-none h-100 bg-gray-300'>4</div>
          <div className='w-100 flex-none h-full bg-gray-300'>5</div>
          <div className='w-100 flex-none h-100 bg-gray-300'>6</div>
          <div className='w-100 flex-none h-full bg-gray-300'>7</div>
          <div className='w-100 flex-none h-100 bg-gray-300'>8</div>
          <div className='w-100 flex-none h-full bg-gray-300'>9</div>
          <div className='w-100 flex-none h-100 bg-gray-300'>10</div>
        </ScrollContainer>

      </main>

      <Footer />
    </div>
  )
}
