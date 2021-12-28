import React, { useState, useRef } from 'react';
import Head from 'next/head'
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import ScrollContainer from 'react-indiana-drag-scroll'

const data = [
  {
    creator: "Husni Ramdani",
    published: "30 November 2021",
    avatar: "/images/avatar.png",
    images: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ", // mandatory
  },
  {
    creator: "",
    published: "",
    avatar: "",
    images: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  },
  {
    creator: "Husni Ramdani",
    published: "",
    avatar: "/images/avatar.png",
    images: "/images/photos.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  },
  {
    creator: "Husni Ramdani",
    published: "30 November 2021",
    avatar: "/images/avatar.png",
    images: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  },
  {
    creator: "Husni Ramdani",
    published: "",
    avatar: "",
    images: "/images/photos.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "",
  },
  {
    creator: "Husni Ramdani",
    published: "",
    avatar: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  },
  {
    creator: "Husni Ramdani",
    published: "30 November 2021",
    avatar: "/images/avatar.png",
    images: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  },
  {
    creator: "Husni Ramdani",
    published: "30 November 2021",
    avatar: "/images/avatar.png",
    images: "/images/photos.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  },
]

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  const scrollEl = useRef(0);

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
      <div className={`h-full w-20 fixed top-0 right-0 ${scrollPos <= 0 ? 'shadow-insetRight' : ''}`}></div>
      <div className={`h-full w-20 fixed top-0 left-0 ${scrollPos > 0 ? 'shadow-insetLeft' : ''}`}></div>

      <Navbar />
      <main className='flex flex-col min-h-140 md:min-h-156 z-10'>
        <h1 className='text-center underline font-bold text-2xl mb-5 md:mb-8 md:text-3xl'>Latest Updates</h1>
        <ScrollContainer
          ref={scrollEl}
          onScroll={(e) => handleScroll(e)}
          className={`flex flex-wrap flex-col content-start h-full overflow-x-auto -mt-5 pt-5 pl-8 md:pl-24 md:-mt-8 md:pt-8`}
        >
          {
            data.map((x, index) => {
              const T = x.title, I = x.images, D = x.detail, A = x.avatar, C = x.creator, P = x.published;
              return (
                <div key={index} className={`w-68 mb-4 mr-5 pr-5 border-r border-gray-300 md:w-80`}>
                  {I &&
                    <div className={`w-full ${A ? 'mb-4' : 'mb-2'}`}>
                      <img src={I} alt="thumbnail" className={`object-cover w-full ${A ? 'h-50' : 'h-34'}`} />
                    </div>
                  }
                  <h2 className={`font-serif font-semibold tracking-tight md:tracking-wide text-3xl ${A ? 'line-clamp-3 mb-3' : 'line-clamp-2 mb-2'}`}>{T}</h2>
                  {D &&
                    <p className={`text-sm text-justify line-clamp-3 ${A ? 'mb-3' : 'mb-2'} leading-relaxed`}>{D}</p>
                  }
                  {A ?
                    <div className='flex items-center'>
                      <div className='bg-black p-1 overflow-hidden w-10 h-10 rounded-xl'>
                        <img src={A} alt="avatar" className='object-cover' />
                      </div>
                      <div className='ml-2'>
                        <h6 className='text-sm font-semibold'>{C}</h6>
                        <h6 className='text-xs'>{P}</h6>
                      </div>
                    </div>
                    :
                    C && <h6 className='text-sm font-semibold'>By <span className='text-orange'>{C}</span></h6>
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
