import React, { useState, useRef, useEffect } from 'react';
import { Client } from '@notionhq/client';
import ScrollContainer from 'react-indiana-drag-scroll';

import Head from 'next/head';
import Link from 'next/link';

import Navbar from "@components/navbar";
import Footer from "@components/footer";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const DB = process.env.DB;
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
    // sorts: [
    //   {
        // property: "Published",
    //     timestamp: "created_time",
    //     direction: "descending"
    //   }
    // ]
  });
  const articles = response.results.map(({ id, cover, properties: { Creator, Title, Subtitle, Published, Layout } }) => {
    return {
      id,
      cover: cover ? cover?.type === "external" ? cover.external.url : cover.file.url : "",
      Title: Title?.title[0]?.plain_text || "",
      Creator: Creator?.people[0] || "",
      Subtitle: Subtitle.rich_text,
      Published: Published?.date?.start || "",
      Layout: Layout?.select?.name || "type1",
    }
  })
  return {
    props: {
      results: articles,
    },
    revalidate: 10
  }
}

export default function Home({ results }) {
  const [scrollPos, setScrollPos] = useState(0);
  const scrollEl = useRef(0);

  useEffect(() => {
    console.log(results);
  }, [results]);

  const handleScroll = (e) => {
    let currentPos = scrollEl.current.scrollLeft
    setScrollPos(currentPos)
  }

  return (
    <div className='py-5 h-screen flex flex-col justify-between md:py-10'>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Personal Blog Spindyzel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`h-full w-20 fixed top-0 ${scrollPos <= 0 ? 'right-0 shadow-insetRight' : 'left-0 shadow-insetLeft'}`} />

      <Navbar />
      <main className='flex flex-col min-h-140 md:min-h-156 z-10'>
        <h1 className='text-center underline font-bold text-2xl mb-5 md:mb-8 md:text-3xl'>Latest Updates</h1>
        <ScrollContainer
          ref={scrollEl}
          onScroll={(e) => handleScroll(e)}
          className={`flex flex-wrap flex-col content-start h-full overflow-x-auto -mt-5 pt-5 pl-8 md:pl-24 md:-mt-8 md:pt-8`}
        >
          {
            results.map((data, index) => {
              const ID = data.id;
              const title = data.Title, cover = data.cover, subtitle = data.Subtitle;
              const avatar = data?.Creator?.avatar_url || "";
              const creator = data?.Creator?.name || "";
              const published = data.Published, layout = data.Layout;
              return (
                <div key={index} className={`w-68 mb-4 mr-5 pr-5 border-r border-gray-300 md:w-80`}>
                  {cover &&
                    <div className={`w-full ${avatar ? 'mb-4' : 'mb-2'}`}>
                      <img src={cover} alt="thumbnail" className={`object-cover w-full ${avatar ? 'h-50' : 'h-34'}`} />
                    </div>
                  }
                  <Link href={`/blog/${ID}`}>
                    <h2
                      className={`
                        font-serif font-semibold tracking-tight text-3xl break-words
                        cursor-pointer underline-offset-2 decoration-2 decoration-orange
                        hover:underline
                        md:tracking-wide
                        ${avatar ? 'line-clamp-3 mb-3' : 'line-clamp-2 mb-2'}
                      `}
                    >
                      {title}
                    </h2>
                  </Link>
                  {subtitle &&
                    <p className={`text-sm text-justify line-clamp-3 ${avatar ? 'mb-3' : 'mb-2'} leading-relaxed`}>
                      {
                        subtitle.map((content, index) => {
                          return (
                            <span
                              key={index}
                              className={`${content.annotations.underline ? 'underline' : ''}`}
                            >
                              {content.plain_text}
                            </span>
                          );
                        })
                      }
                    </p>
                  }
                  {layout === "type1" && avatar ?
                    <div className='flex items-center'>
                      <div className='bg-black p-1.5 overflow-hidden w-10 h-10 rounded-xl'>
                        <img src={avatar} alt="avatar" />
                      </div>
                      <div className='ml-2'>
                        <h6 className='text-sm font-semibold'>{creator}</h6>
                        <h6 className='text-xs'>{published}</h6>
                      </div>
                    </div>
                    :
                    creator && <h6 className='text-sm font-semibold'>By <span className='text-orange'>{creator}</span></h6>
                  }
                  <hr className='mt-4 border-gray-300' />
                </div>
              )
            })
          }
        </ScrollContainer>

      </main>

      <Footer />
    </div>
  )
}
