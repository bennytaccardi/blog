// import Image from 'next/image'

'use client';
import Home from "./home/home";
import { Analytics } from '@vercel/analytics/react';

export default function Root() {
  return (
    <>
      <main className="overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 flex min-h-screen flex-col items-center justify-between pt-7 pb-10 bg-gradient-to-tr bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900 overflow-auto scrollbar-hide">
        <Home />
      </main>
      <Analytics />
    </>
  );
}