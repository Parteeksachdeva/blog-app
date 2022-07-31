import React from "react";

export default function CardComponent({ post }) {
  return (
    <section className="rounded overflow-hidden shadow-lg px-6 py-4 flex flex-col justify-between h-80 ">
      <div className="">
        <p className="font-bold text-xl mb-2">{post?.title}</p>
        <p className="text-gray-700 text-base">{post?.body}</p>
      </div>
      <div>
        <button className="bg-purple-800 text-white px-10 py-2 rounded-lg">
          Visit
        </button>
      </div>
    </section>
  );
}
