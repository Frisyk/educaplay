import { Nav } from '@/components/Games/Nav';
import Link from 'next/link';
import React from 'react';

export default function AssessmentPage() {
  const posts = [
    {
      title: "Assesment 1",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScQKEx6fPXz_ijSSNIiz4zDen2qdGt1V8AQj3RpDYBvs4YNJQ/viewform?usp=sf_link"
    },
    {
      title: "Assesment 2",
      link: "https://google.com"
    }
  ];

  return (
    <div className=" h-screen w-full">
      <Nav title="Assesment" link="/dashboard/quest"/>
      <div className="flex flex-col gap-5  items-center justify-center">
        {posts.map((post, index) => (
          <AssessmentList key={index} data={post} />
        ))}
      </div>
    </div>
  );
}

interface iData {
  title: string
  link: string
}

function AssessmentList({ data }: {data: iData }) {
  return (
    <Link href={data.link} prefetch={false} target='_blank'
       className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-5 px-10 w-full lg:w-2/3 rounded">
        {data.title}
    </Link>
  );
}

