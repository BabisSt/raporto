import Image from 'next/image';	
import React from "react";
import Link from "next/link";


interface Post {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photos: string[];
}

interface CarouselProps {
  posts: Post[];
}

export default function BetterCarousel({ posts }: CarouselProps) {

  return (
    <section className="w-full max-w-screen-xl mx-auto py-4 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {posts.slice(0, 4).map((post) => (
          <div
            key={post.id}
            className="relative transition-all duration-500 ease-in-out group border-b-4 border-t-4 border-red-900 rounded-lg
            h-[250px]  overflow-hidden"
          >
          <Link key={post.id} href={`/post/${post.id}`} >
		  <Image 
			src={post.photos[0]} 
			alt={post.title} 
			width={300} 
			height={300} 
			className=" w-full h-[250px]"
			/>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 p-2 rounded-md">
                <span className="text-white text-sm md:text-md font-bold text-center">
                  {post.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
