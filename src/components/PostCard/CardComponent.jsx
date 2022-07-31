import React from "react";

export default function CardComponent({ post, handleClick }) {
  return (
    <section className="rounded overflow-hidden shadow-lg p-6 flex flex-col justify-between h-72">
      <div>
        <p className="font-bold text-xl mb-2">{post?.title}</p>
        <p className="text-gray-700 text-base line-clamp-4">{post?.body}</p>
      </div>
      <div>
        <button
          className="bg-purple-800 text-white px-10 py-2 rounded-lg"
          onClick={handleClick}
        >
          Visit
        </button>
      </div>
    </section>
  );
}
