import { Nav } from '@/components/Games/Nav';
import Link from 'next/link';
import React from 'react';

export default function AssessmentPage() {
  const posts = [
    {
      title: "Pre-Test",
      link: "https://forms.gle/TPq8NnJFMAmpAoxn9"
    },
    {
      title: "Post-Test",
      link: "https://forms.gle/TPq8NnJFMAmpAoxn9"
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

