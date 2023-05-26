// import Image from 'next/image'

'use client';
import Link from "next/link";
import { useState } from "react";
import Home from "./home/home";

export default function Root() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-black via-stone-900 to-black">
        <Home />
    </main>
  );
}