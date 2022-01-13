import React, { useEffect } from 'react';
import { Client } from '@notionhq/client';
import moment from 'moment';

import Image from 'next/image';
import Head from 'next/head';

import Navbar from "@components/navbar";
import Footer from "@components/footer";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DB = process.env.DB;

export default function Blog({ pages, blocks }) {
  const { Creator, Title: title, Published: published, cover } = pages;
  const avatar = Creator?.avatar_url || "";
  const creator = Creator?.name || "";

  return (
    <div className='min-h-screen py-5 md:py-10'>
      {/* seo */}
      <Head>
        <title>{title}</title>
        <meta name="description" content="Detail content Blog Spindyzel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main className='flex justify-center'>
        {/* content */}
        <div className='mb-5 py-5 mx-8 w-full md:mx-24 md:max-w-screen-md'>
          {/* Blog Title */}
          <h1 className='mb-5 text-center font-bold text-4xl leading-normal line-clamp-3 md:text-6xl md:leading-relaxed'>
            {title}
          </h1>
          {/* publisher info */}
          <div className='flex items-center justify-center'>
            {avatar &&
              <div className='relative bg-black overflow-hidden w-10 h-10 rounded-center p-2 md:w-12 md:h-12 md:p-2.5'>
                <Image
                  src={avatar}
                  alt='avatar'
                  layout='fill'
                  objectFit="contain"
                  quality={50}
                />
              </div>
            }
            {creator &&
              <div className='ml-2'>
                <h6 className='text-sm font-semibold text-orange'>{creator}</h6>
                {published &&
                  <h6 className='text-xs'>{moment(published).format("DD MMMM YYYY")}</h6>
                }
              </div>

            }
          </div>
          {/* divider */}
          <div className='my-8 flex justify-center space-x-3'>
            <div className='circle-divider' />
            <div className='circle-divider' />
            <div className='circle-divider' />
          </div>
          {/* cover */}
          {cover &&
            <img
              src={cover}
              alt="thumbnail"
              className={`object-cover w-full max-h-96 md:max-h-100 lg:max-h-120`}
            />
          }
          {/* content article */}
          <article className='py-5 mx-auto max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md prose dark:prose-invert prose-hr:border-gray-400 break-words'>
            {
              blocks.map((block, index) => {
                const key = block[block.type];
                const imgContent = key?.file?.url || "";
                const content = Array.isArray(key.text) ? key.text.map(({plain_text}) => plain_text).join(' ') : "-"
                if (block.type === "heading_1") {
                  return <h1 key={index}>{content}</h1>
                } else if (block.type === "heading_2") {
                  return <h2 key={index}>{content}</h2>
                } else if (block.type === "heading_3") {
                  return <h3 key={index}>{content}</h3>
                } else if (block.type === "bulleted_list_item") {
                  return (
                    <ul key={index} className='not-prose'>
                      <li>{content}</li>
                    </ul>
                  )
                } else if (block.type === "quote") {
                  return <blockquote className='border-black dark:border-gray-300' key={index}>{content}</blockquote>
                } else if (block.type === "divider") {
                  return <hr key={index} />
                } else if (block.type === "image") {
                  return <img key={index} src={imgContent} />
                } else if (block.type === "code") {
                  return <code key={index}>{content}</code>
                } else {
                  return <p key={index}>{content}</p>
                }
              })
            }
          </article>
          {/* default thumbnail */}
        </div>
        {/* Empty Content */}
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const response = await notion.databases.query({
    database_id: DB,
    filter: {
      and: [{
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
      }]
    },
  });

  const paths = response.results.map(({ id }) => ({
    params: { id }
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const BLOCK_ID = context.params.id;

  const pages = await notion.pages.retrieve({
    page_id: BLOCK_ID,
  });
  const { id, cover, properties: { Creator, Title, Subtitle, Published, Layout } } = pages;

  const blocks = await notion.blocks.children.list({
    block_id: BLOCK_ID,
  });

  return {
    props: {
      pages: {
        id,
        cover: cover ? cover?.type === "external" ? cover.external.url : cover.file.url : "",
        Title: Title?.title[0]?.plain_text || "",
        Creator: Creator?.people[0] || "",
        Subtitle: Subtitle.rich_text,
        Published: Published?.date?.start || "",
        Layout: Layout?.select?.name || "type1",
      },
      blocks: blocks.results,
    }
  }
}