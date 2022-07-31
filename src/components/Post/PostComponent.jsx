import React from "react";

export default function PostComponent({ post, handleClick, comments }) {
  return (
    <section className="rounded p-10 flex flex-col justify-between space-y-10">
      <div>
        <p className="font-bold text-xl mb-2">{post?.title}</p>
        <p className="text-gray-700 text-base">{post?.body}</p>
      </div>
      <div>
        <section>
          <h1>Comments</h1>
          {comments.map((comment, index) => (
            <p>{JSON.stringify(comment)}</p>
          ))}
        </section>

        <button
          className="bg-purple-800 text-white px-10 py-2 rounded-lg"
          onClick={handleClick}
        >
          Go to Home
        </button>
      </div>
    </section>
  );
}
