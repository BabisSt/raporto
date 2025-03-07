import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PinnedPostProps } from "@/app/interfaces";

  
export default function PinnedPost( { post }: PinnedPostProps) {
	return (
		<div className="relative ">
			<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
			<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
				<h2 className="text-xl font-bold mb-2">📌 Κορυφαίο Άρθρο</h2>
				<div className="relative">
				<Image
					src={post.photos[0]}
					alt="Pinned Article"
					className="rounded-lg w-full object-cover h-48"
					width={200}
					height={200}
				/>
				<div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-md">
					{post.tags.map((tag) => (
					<span key={tag} className="text-sm font-medium px-2 py-1 mr-2 bg-gray-800 rounded">
						#{tag}
					</span>
					))}
				</div>
				</div>
				<h3 className="text-lg font-semibold mt-3">{post.title}</h3>
				<p className="text-gray-600 text-sm">{post.postTime} | {post.postedBy}</p>
				<p className="text-gray-700 my-2 text-sm">{post.content.substring(0, 100)}...</p>
				<Link 
				href={`/post/${post.id}`} 
				className=" mt-2 text-gray-900 p-2 text-sm hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg">
					Διαβάστε περισσότερα
				</Link>
			</div>
	</div>
)

}