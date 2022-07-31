import React from "react";

export default function CardComponent({ comment }) {
  return (
    <div className="bg-white rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl">
      <h1 className="text-lg text-gray-700 font-semibold">{comment?.name}</h1>
      <p className="mt-4 text-md text-gray-600">{comment?.body}</p>
      <div className="mt-4 flex items-center space-x-4 py-6">
        <div className="text-sm font-semibold">{comment?.email}</div>
      </div>
    </div>
  );
}
