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
  // {
  //   creator: "Husni Ramdani",
  //   published: "30 November 2021",
  //   avatar: "/images/avatar.png",
  //   images: "/images/photos.png",
  //   title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus",
  //   detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et. Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. ",
  // },
  {
    creator: "Husni Ramdani",
    published: "",
    avatar: "",
    // images: "/images/photos.png",
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
  let colPos = 0;
  let counter = 1;
  return (
    <div className='py-10 h-screen flex flex-col justify-between'>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Personal Blog Spindyzel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='flex flex-col min-h-156'>
        <h1 className='text-center underline font-bold text-3xl mb-8'>Latest Updates</h1>
        {/* <ScrollContainer className='grid grid-flow-col grid-rows-2 auto-cols-max ml-24 overflow-x-auto'>
          {
            data.map( (x, index) => {
              const justTooMuch = x.images && x.avatar;
              const T=x.title, I=x.images, D=x.detail, A=x.avatar, C=x.creator, P=x.published;
              counter += justTooMuch ? 2 : 1;
              colPos += justTooMuch || counter%2===0 ? 1 : 0;
              // cek apakah before dan afternya too much
              // isBetweenUs = data[]
              // bikin case TIDACP T=Title, I=Image, D=Details, A=Avatar, C=Creator, P=Published
              if(A){
                return (
                  <div key={index} className={`mr-5 pr-5 h-content border-r border-gray-300 ${justTooMuch ? 'row-span-2' : ''} w-80`}>
                    <h2 className='font-serif text-3xl font-semibold text-justify line-clamp-3 mb-3'>{T}</h2>
                    <p className='text-sm line-clamp-4 mb-3'>{D}</p>
                    <div>
                      <div className='bg-black p-1 overflow-hidden w-12 h-12 rounded-xl'>
                        <img src={A} alt="avatar" className='object-cover'/>
                      </div>
                      <h6>{C}</h6>
                    </div>
                    <hr className='mt-3 border-gray-300'/>
                  </div>
                )
              } else {
                return (
                  <div key={index} className={`mr-5 pr-5 h-content border-r border-gray-300 ${justTooMuch ? 'row-span-2' : ''} w-80`}>
                    <h2 className='font-serif text-3xl font-semibold text-justify line-clamp-3 mb-3'>{T}</h2>
                    <p className='text sm line-clamp-4 mb-3'>{D}</p>
                    <hr className='mt-3 border-gray-300'/>
                  </div>
                )
              }
            })
          }
        </ScrollContainer> */}
        <ScrollContainer className='relative flex flex-wrap flex-col ml-24 h-full overflow-x-auto'>
          {
            data.map((x, index) => {
              const justTooMuch = x.images && x.avatar;
              const T = x.title, I = x.images, D = x.detail, A = x.avatar, C = x.creator, P = x.published;
              let isBetweenUs = '';
              if(index>0){
                isBetweenUs = (data[index-1].images && data[index-1].avatar) && (data[index+1].images && data[index+1].avatar)
              }
              // console.log(counter, justTooMuch)
              counter += (justTooMuch || isBetweenUs) ? 2 : 1;
              colPos += justTooMuch || isBetweenUs || counter % 2 === 0 ? 1 : 0;
              // cek apakah before dan afternya too much
              if (A) {
                return (
                  <div key={index} className={`w-80 mb-4 mr-5 pr-5 border-r border-gray-300 ${justTooMuch ? 'row-span-2' : ''}`}>
                    {I &&
                      <div className='w-full mb-4'>
                        <img src={I} alt="avatar" className='object-cover w-full h-50' />
                      </div>
                    }
                    <h2 className='font-serif text-3xl font-semibold tracking-wide line-clamp-3 mb-2.5'>{T}</h2>
                    <p className='text-sm text-justify line-clamp-3 mb-3 leading-relaxed'>{D}</p>
                    <div className='flex items-center'>
                      <div className='bg-black p-1 overflow-hidden w-10 h-10 rounded-xl'>
                        <img src={A} alt="avatar" className='object-cover' />
                      </div>
                      <div className='ml-2'>
                        <h6 className='text-sm font-semibold'>{C}</h6>
                        <h6 className='text-xs'>{P}</h6>
                      </div>
                    </div>
                    <hr className='mt-4 border-gray-300' />
                  </div>
                )
              } else {
                return (
                  <div key={index} className={`w-80 mb-4 mr-5 pr-5 border-r border-gray-300 ${justTooMuch ? 'row-span-2' : ''}`}>
                    {I &&
                      <div className='w-full mb-2'>
                        <img src={I} alt="avatar" className='object-cover w-full h-34' />
                      </div>
                    }
                    <h2 className='font-serif text-3xl font-semibold tracking-wide line-clamp-2 mb-2'>{T}</h2>
                    {D &&
                      <p className='text-sm text-justify line-clamp-3 mb-2 leading-relaxed'>{D}</p>
                    }
                    {C &&
                      <h6 className='text-sm font-semibold'>By <span className='text-orange'>{C}</span></h6>
                    }
                    <hr className='mt-4 border-gray-300' />
                  </div>
                )
              }
            })
          }
        </ScrollContainer>

      </main>

      <Footer />
    </div>
  )
}
