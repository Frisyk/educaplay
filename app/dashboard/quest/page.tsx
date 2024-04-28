import Games from '@/components/Games'
import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Quest",
  description: 'Games belajar PAI tentang shalat.',
};

export default function GamePage() {
  return (
    <>
      <Games/>
    </>
  )
}
