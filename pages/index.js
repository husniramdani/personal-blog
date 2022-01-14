import React, { useRef } from 'react';
import { Client } from '@notionhq/client';
import ScrollContainer from 'react-indiana-drag-scroll';
import moment from 'moment';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from '@components/navbar';
import Footer from '@components/footer';

export default function Home({ results }) {
  const scrollEl = useRef(0);
  return (
    <div className='
      py-5 h-screen flex flex-col justify-between
      md:py-10
    '>
      {/* SEO */}
      <Head>
        <title>GBlog</title>
        <meta name='description' content='Personal Blog Spindyzel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      {/* main page */}
      <main className='
        flex flex-col min-h-140
        md:min-h-148
      '>
        <h1 className='
          mb-5 text-2xl text-center underline font-bold
          md:mb-8 md:text-3xl
        '>
          Latest Updates
        </h1>
        <ScrollContainer
          ref={scrollEl}
          className='
            pl-8 -mt-5 pt-5 flex flex-wrap flex-col content-start h-full overflow-x-auto
            md:pl-24 md:-mt-8 md:pt-8
          '
        >
          {
            results.map((data, index) => {
              const {
                id, Title, cover, Subtitle,
                Published, Layout,
                Creator: {
                  avatar_url = '',
                  name = ''
                },
              } = data;
              const isMainTypeWithAvatar = Layout === 'type1' && avatar_url;
              return (
                <div
                  key={index}
                  className='
                    w-68 mb-4 mr-5 pr-5 border-r border-gray-300
                    md:w-80
                  '
                >
                  <Link href={`/blog/${id}`}>
                    <div className='group cursor-pointer'>
                      {cover &&
                        <div className={`
                          w-full relative grayscale-[95%]
                          group-hover:grayscale-0
                          ${isMainTypeWithAvatar ? 'mb-4 h-50' : 'mb-2 h-34'}
                        `}>
                          <Image
                            src={cover}
                            alt='thumbnail'
                            layout='fill'
                            objectFit='cover'
                            quality={40}
                            className='transition duration-500 group-hover:scale-125'
                          />
                        </div>
                      }
                      <h2
                        className={`
                          font-serif font-semibold tracking-tight text-3xl break-words underline-offset-2 decoration-2 decoration-orange
                          md:tracking-wide
                          group-hover:underline
                          ${avatar_url ? 'line-clamp-3 mb-3' : 'line-clamp-2 mb-2'}
                        `}
                      >
                        {Title}
                      </h2>
                    </div>
                  </Link>
                  {Subtitle &&
                    <p className={`
                      text-sm text-justify line-clamp-3 leading-relaxed
                      ${avatar_url ? 'mb-3' : 'mb-2'}
                    `}>
                      {Subtitle.map((content, index) => {
                        return (
                          <span
                            key={index}
                            className={`
                                ${content.annotations.underline ? 'underline' : ''}
                                ${content.annotations.strikethrough ? 'line-through' : ''}
                              `}
                          >
                            {content.plain_text}
                          </span>
                        );
                      })
                      }
                    </p>
                  }
                  {isMainTypeWithAvatar ?
                    <div className='flex items-center'>
                      <div className='relative bg-black overflow-hidden w-10 h-10 rounded-xl'>
                        <Image
                          src={avatar_url}
                          alt='avatar'
                          layout='fill'
                          objectFit='contain'
                          quality={50}
                        />
                      </div>
                      <div className='ml-2'>
                        <h6 className='text-sm font-semibold'>{name}</h6>
                        <h6 className='text-xs'>{moment(Published).format('DD MMMM YYYY')}</h6>
                      </div>
                    </div>
                    :
                    name &&
                    <h6 className='text-sm font-semibold'>
                      By <span className='text-orange'>{name}</span>
                    </h6>
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

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const DB = process.env.DB;
  const response = await notion.databases.query({
    database_id: DB,
    filter: {
      and: [
        {
          property: 'Title',
          text: {
            is_not_empty: true,
          },
        },
        {
          property: 'Status',
          select: {
            equals: 'published',
          },
        },
      ]
    },
  });
  const articles = response.results.map(({ id, cover, properties: { Creator, Title, Subtitle, Published, Layout } }) => {
    return {
      id,
      cover: cover ? cover?.type === 'external' ? cover.external.url : cover.file.url : '',
      Title: Title?.title[0]?.plain_text || '',
      Creator: Creator?.people[0] || '',
      Subtitle: Subtitle.rich_text,
      Published: Published?.date?.start || '',
      Layout: Layout?.select?.name || 'type1',
    }
  })
  return {
    props: {
      results: articles,
    },
    revalidate: 60
  }
}