import React from "react";
import CardContainer from "../PostCard/CardContainer";

export default function HomeComponent({ allPosts }) {
  return (
    <section className="p-10 space-y-5">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <div className="grid grid-cols-4 gap-10">
        {allPosts.map((post, index) => (
          <CardContainer key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
