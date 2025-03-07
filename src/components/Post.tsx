import { useRouter } from "next/navigation"; // Import useRouter
import React from "react";
import { tagMappings } from "../../public/tagMappings";
import Link from "next/link";
import Image from "next/image";
import { postDataProps } from "@/app/interfaces";

export default function Post({
  id,
  title,
  postedBy,
  postTime,
  content,
  photos,
  tags,
}: postDataProps) {
  const router = useRouter();

  const handleNavigatePost = () => {
    router.push(`/post/${id}`);
  };

  return (
    <div
      className="flex flex-col shadow-lg rounded-lg bg-slate-300 w-full lg:w-[500px] xl:w-[750px] h-auto transform transition-transform duration-500 ease-in-out group hover:scale-105 cursor-pointer"
      onClick={handleNavigatePost} // Navigate when clicking the card
    >
      {/* Photo Section */}
      {photos && (
        <div className="w-full max-h-64 overflow-hidden">
          <Image
            height={200}
            width={1000}
            src={photos[0]}
            alt="Post"
            className="object-cover rounded-t-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 text-center break-words">
          {title}
        </h2>

        {/* Posted Date */}
        <p className="text-gray-500 text-sm text-center mt-1">{postTime}</p>

        <hr className="my-2" />

        {/* Post Content */}
        <p className="text-gray-700 mt-2 text-ellipsis overflow-visible">
          {content}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center">
          {/* Author Button */}
          <Link
            href={`/author/${postedBy}`}
            className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 sm:mb-0"
            onClick={(e) => e.stopPropagation()} // Prevent parent div click
          >
            {postedBy}
          </Link>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tagMappings[tag] || tag}`}
                className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={(e) => e.stopPropagation()} // Prevent parent div click
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
