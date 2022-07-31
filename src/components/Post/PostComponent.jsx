import React from "react";

import CardContainer from "../CommentCard/CardContainer";

export default function PostComponent({
  post,
  handleClick,
  comments,
  isPostLoading,
  isCommentsLoading,
}) {
  if (isPostLoading || isCommentsLoading) {
    return <p className="p-10">Loading...</p>;
  }

  return (
    <section className="rounded p-10 flex flex-col justify-between space-y-10">
      <div>
        <p className="font-bold text-xl mb-2">{post?.title}</p>
        <p className="text-gray-700 text-base">{post?.body}</p>
      </div>
      <div>
        {/* Comments */}
        <section className="space-y-4">
          <h1 className="text-2xl font-bold">Comments</h1>
          <div className="grid grid-cols-4 gap-4">
            {comments.map((comment, index) => (
              <CardContainer key={index} comment={comment} />
            ))}
          </div>
        </section>

        <button
          className="bg-purple-800 text-white px-10 py-2 rounded-lg mt-8"
          onClick={handleClick}
        >
          Go to Home
        </button>
      </div>
    </section>
  );
}
