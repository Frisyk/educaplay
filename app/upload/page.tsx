import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { UUID, randomUUID } from "crypto"; // Using UUID for unique filenames
import { getGames, newPost } from "@/lib/action";
import Image from "next/image";


export default async function upload() {
  async function handleUpload(formData: FormData) {
    "use server"

    const file = formData.get("file") as File;
    const title = formData.get("name")
    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
  
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = JSON.parse(JSON.stringify(title));

    try {
      await newPost(filename, buffer)
     
    } catch (error) {
      console.log(error);
      
    }
  }
  const games = await getGames()
    

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold pb-24">Add file</h1>
      <form action={handleUpload}>
        <input type="file" name="file" className="w-96 p-4"  />
        <input type="text" name="name" className="w-96 p-4 my-5" placeholder="add title" />
        <button className="bg-blue-500 text-white p-4 rounded">Submit</button>
      </form>
      {
        games.map((game) => {
          var blob = new Blob([game.image!], { type: "image/png" });
          var imageUrl = URL.createObjectURL(blob);
          const base64 = Buffer.from(imageUrl).toString('base64');
          
          return(
            <Image
              key={game.id}
              src={`data:image/jpeg;base64,YmxvYjpub2RlZGF0YToyMjZiYjBjYS1iYWU2LTRhMzgtYWJmNS0zM2ZmM2EzNTFhMDA=`}
              alt={game.title}
              width={400}
              height={400}
            />
          )
    
        })
      }
    </main>
  );
}
