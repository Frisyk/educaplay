import TopNavigation from "@/components/TopNavMateri";
import { getPost } from "@/lib/action";
import { materi } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import defaultImg from "@/public/default.png"
import perbedaan from "@/public/perbedaan.png"

export const generateMetadata = async ({params}: {params: MateriParams}) => {
  const {title, materi1} = materi[params.id]
  return {
    title: title,
    description: materi1
  }
}

type MateriParams = {
  id: number;
};

async function MateriPage({ params }: { params: MateriParams }) {
  const postId = params.id.toString();
  const post = await getPost((parseInt(postId) + 1).toString());
  let imageSource: string | null | StaticImageData | undefined = post?.image
  
  if(post?.id == "7") {
    imageSource = perbedaan
  }
  

  return (
    <main className="min-h-screen py-20 flex  md:w-[60%] mx-auto flex-col items-center">
      <TopNavigation id={`/dashboard/materi/${params.id}`} />
      <div className=" mx-auto  flex flex-col text-blue-800 items-center">
        <h1 className="text-3xl font-bold my-5 text-center rounded-2xl text-blue-900 bg-blue-100 p-3">{post?.title}</h1>
        <div className="text-base leading-8 mt-3 text-justify whitespace-pre-line">
          <p>{post?.content}</p><br />

            <Image
              src={imageSource || defaultImg}
              alt={post?.title || "details"}
              width={1400}
              height={1400}
              className="min-w-20"
              loading="lazy"
            />
          
        </div>
      </div>
    </main>
  );
}

export default MateriPage