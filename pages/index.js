import React from 'react';
import Link from "next/link"

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-darkMode text-lightMode'>
      <p className="text-center font-bold text-2xl mb-6">
        Notion Widgets by Trehan Sangpriya
      </p>
      <Link href='/edit/minimal-clock' passHref >
        <a>
          <div
            className="w-[280px] shadow-sm flex justify-center items-center border border-1 border-white rounded-md p-4 font-semibold">
            Minimal Clock
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Home