// import Image from 'next/image'

'use client';
import Link from "next/link";
import { useState } from "react";
import Home from "./home/home";

export default function Root() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900">
        <Home />
    </main>
  );
}