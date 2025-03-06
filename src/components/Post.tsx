import React from "react";
import { tagMappings } from "../../public/tagMappings";
import Link from "next/link";
import Image from 'next/image';

// TODO: Backend should create a table for tags
export interface postDataProps {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photos: string[];
  tags: string[];
}

export default function Post({
  id,
  title,
  postedBy,
  postTime,
  content,
  photos,
  tags,
}: postDataProps) {



  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    
  };

  const handleNavigateTag = (event: React.MouseEvent) => {
	event.stopPropagation(); // Prevent event bubbling
  };

  

  return (
	
	<Link href={`/post/${id}`} 	className="flex flex-col shadow-lg rounded-lg bg-slate-300 w-full lg:w-[500px] xl:w-[750px] h-auto transform transition-transform duration-500 ease-in-out group hover:scale-105">
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

		{/* Actions */}
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center">
		{/* Author Button */}
		<Link
			href={`/author/${postedBy}`}
			onClick={(e) => handleNavigateAuthor(e)}
			className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 sm:mb-0"
		>
			{postedBy}
		</Link>

		{/* Tags Section */}
		<div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
		{tags.map((tag) => (
			<Link key={tag} href={`/tag/${tagMappings[tag] || tag}`} passHref onClick={(e) => handleNavigateTag(e)} 
			className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
				
				{tag}
			</Link>
			))}
		</div>
		</div>
	</div>
	</Link>
  );
}
