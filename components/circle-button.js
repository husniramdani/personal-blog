import React from 'react';

export default function CircleButton({ link, children }) {
  return (
    <div className='
      group rounded-center h-[2.8rem] w-[2.8rem] bg-black
      hover:bg-gradient-to-b hover:from-orange hover:to-purple
      dark:bg-gray-200
    '>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='
          rounded-center bg-sand h-10 w-10
          dark:bg-black
        '
      >
        {children}
      </a>
    </div>
  );
}
