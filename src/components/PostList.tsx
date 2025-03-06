"use client";

import { useState } from "react";
import Post, { postDataProps } from "@/components/Post";


interface PostListProps {
	posts: postDataProps[]
  }

export default function PostList({ posts } : PostListProps) {
  const [visiblePosts, setVisiblePosts] = useState(5);

  const handleShowMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  return (
    <div>
      <div className="flex flex-col gap-6 flex-grow">
        {posts.slice(0, visiblePosts).map((data) => (
          <div key={data.id}>
            <Post
              id={data.id}
              title={data.title}
              postedBy={data.postedBy}
              postTime={data.postTime}
              content={data.content}
              photos={data.photos}
              tags={data.tags}
            />
          </div>
        ))}
      </div>

      {visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center mb-4"
          >
            Περισσότερα άρθρα
          </button>
        </div>
      )}
    </div>
  );
}
