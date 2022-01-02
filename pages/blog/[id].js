import React, { useEffect } from 'react';
import { Client } from '@notionhq/client';

import Head from 'next/head';

import Navbar from "@components/navbar";
import Footer from "@components/footer";

export async function getStaticPaths() {
  const response = await notion.databases.query({
    database_id: DB,
    filter: {
      and: [
        {
          property: "Title",
          text: {
            is_not_empty: true,
          },
        },
        {
          property: "Status",
          select: {
            equals: "published",
          },
        },
      ]
    },
  });

  const paths = response.map(({ id }) => ({
    params: { id }
  }));
  
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const BLOCK_ID = "033fe713-d020-401f-8314-c2f4719d6b66";
  const response = await notion.blocks.children.list({
    block_id: BLOCK_ID,
  })
  return {
    props: {
      results: response.results,
    }
  }
}

export default function Blog({ results }) {
  useEffect(() => {
    console.log(results);
  });

  return (
    <div className='py-5 md:py-10'>
      <Head>
        <title>Detail Blog</title>
        <meta name="description" content="Detail content Blog Spindyzel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='flex justify-center'>
        {/* content */}
        <div className='mb-5 py-5 mx-8 w-full md:mx-24 md:max-w-screen-md'>
          {/* Blog Title */}
          <h1 className='mb-5 text-center font-bold text-4xl leading-normal line-clamp-3 md:text-6xl md:leading-relaxed'>Blog Title</h1>
          {/* publisher info */}
          <div className='flex items-center justify-center'>
            <div className='bg-black overflow-hidden w-10 h-10 rounded-center p-2 md:w-12 md:h-12 md:p-2.5'>
              <img src="/images/avatar.png" alt="avatar" />
            </div>
            <div className='ml-2'>
              <h6 className='text-sm font-semibold text-orange'>Husni Ramdani</h6>
              <h6 className='text-xs'>30 November 2021</h6>
            </div>
          </div>
          {/* divider */}
          <div className='my-8 flex justify-center space-x-3'>
            <div className='circle-divider' />
            <div className='circle-divider' />
            <div className='circle-divider' />
          </div>
          <img src="/images/photos.png" alt="thumbnail" className={`object-cover w-full max-h-96 md:max-h-100 lg:max-h-120`} />
          <div className='py-5'>
            <p className='content-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et.
            </p>
            <p className='content-paragraph'>
              Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra.
            </p>
          </div>
          {/* default thumbnail */}
        </div>
        {/* Empty Content */}
      </main>

      <Footer />
    </div>
  )
}
