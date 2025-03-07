import { PostListProps } from "@/app/interfaces";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function PostSuggested({ posts }: PostListProps) {


  return (
    <div className="p-6">
      <h2 className=" text-lg font-bold text-gray-900 w-full  rounded-lg  text-center border-b-4 mb-4 pb-1 border-red-900">
        Δημοφιλή Άρθρα
      </h2>

      <div className={"overflow-hidden max-h-[2000px]"}>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 ">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-between border-b-4 border-t-4 border-red-900 rounded-lg"
              style={{ minHeight: "400px" }}
            >
              <Link
                
                className="group flex flex-col h-full bg-slate-300 border border-gray-200 rounded-lg hover:bg-slate-800"
               href={`/post/${post.id}`}
              >
                <Image
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={post.photos[0]}
                  alt={post.title}
				  width={500}
				  height={500}
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white line-clamp-2">
                    {post.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 group-hover:text-white line-clamp-3">
                    {post.content}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
